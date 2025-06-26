import { useForm } from 'react-hook-form';
import type { IPatient } from '../_types';
import { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { z } from 'zod/v4';
import { toast } from 'react-toastify';

const PatientSchema = z.object({
	name: z.string().min(2, 'Name required'),
	avatar: z.url('Invalid avatar URL'),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	website: z.url('Invalid website URL'),
});

export type PatientForm = z.infer<typeof PatientSchema>;

interface UsePatientFormProps {
	initialData?: IPatient | null;
	mode: 'add' | 'edit';
	onSubmit?: () => void;
	setPatients: React.Dispatch<React.SetStateAction<IPatient[]>>;
}

export default function usePatientForm({ initialData, mode, onSubmit, setPatients }: UsePatientFormProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<PatientForm>({
		defaultValues: initialData || {
			name: '',
			avatar: '',
			description: '',
			website: '',
		},
	});

	useEffect(() => {
		if (initialData) reset(initialData);
		else
			reset({
				name: '',
				avatar: '',
				description: '',
				website: '',
			});
	}, [initialData, reset]);

	const onSubmitHandler: SubmitHandler<PatientForm> = data => {
		try {
			PatientSchema.parse(data);
			if (mode === 'add') {
				const newPatient: IPatient = {
					...data,
					id: crypto.randomUUID(),
					createdAt: new Date().toISOString(),
				};
				setPatients((prev: IPatient[]) => [...prev, newPatient]);
				toast.success('Patient added successfully!');
			} else {
				setPatients((prev: IPatient[]) =>
					prev.map(patient => (patient.id === initialData?.id ? { ...patient, ...data } : patient))
				);
				toast.success('Patient updated successfully!');
			}
			if (onSubmit) onSubmit();
		} catch (error) {
			if (error instanceof z.ZodError) {
				error.issues.forEach(err => {
					toast.error(err.message);
				});
			} else {
				toast.error('An unexpected error occurred.');
			}
		}
	};
	return {
		register,
		handleSubmit,
		reset,
		errors,
		onSubmitHandler,
	};
}

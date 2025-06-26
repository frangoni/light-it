import type { IPatient } from '../types';
import { AppButton, Title } from '../../_shared/components/generic';
import { ErrorMsg, Field, Form, Input, Label } from './styles';
import usePatientForm from './usePatientForm';

interface Props {
	initialData?: IPatient | null;
	mode: 'add' | 'edit';
	onSubmit: () => void;
	setPatients: React.Dispatch<React.SetStateAction<IPatient[]>>;
}

export default function PatientForm({ initialData, mode, onSubmit, setPatients }: Props) {
	const { register, handleSubmit, errors, onSubmitHandler } = usePatientForm({
		initialData,
		mode,
		onSubmit,
		setPatients,
	});

	return (
		<>
			<Title>{mode === 'add' ? 'Add Patient' : 'Edit Patient'}</Title>
			<Form onSubmit={handleSubmit(onSubmitHandler)}>
				<Field>
					<Label>Name</Label>
					<Input {...register('name')} />
					{errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
				</Field>
				<Field>
					<Label>Avatar</Label>
					<Input {...register('avatar')} />
					{errors.avatar && <ErrorMsg>{errors.avatar.message}</ErrorMsg>}
				</Field>
				<Field>
					<Label>Description</Label>
					<Input {...register('description')} />
					{errors.description && <ErrorMsg>{errors.description.message}</ErrorMsg>}
				</Field>
				<Field>
					<Label>Website</Label>
					<Input {...register('website')} />
					{errors.website && <ErrorMsg>{errors.website.message}</ErrorMsg>}
				</Field>

				<AppButton type='submit'>{mode === 'add' ? 'Add' : 'Save'}</AppButton>
			</Form>
		</>
	);
}

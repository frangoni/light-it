import PatientCard from '../Card/PatientCard';
import type { IPatient } from '../_types';
import { ListContainer } from './styles';

interface PatientListProps {
	patients: IPatient[];
	onEdit: (patient: IPatient) => void;
	isPending?: boolean;
	error?: Error | null;
}

export default function PatientList({ patients, onEdit, isPending, error }: PatientListProps) {
	if (error) return <div>Error loading patients: {error.message}</div>;

	if (isPending) return <div>Loading patients...</div>;

	return (
		<ListContainer>
			{patients.map(patient => (
				<PatientCard key={patient.id} patient={patient} onEdit={onEdit} />
			))}
		</ListContainer>
	);
}

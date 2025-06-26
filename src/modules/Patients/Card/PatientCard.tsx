import type { IPatient } from '../types';
import Accordion from '../../_shared/components/Accordion';
import { AppButton, Card } from '../../_shared/components/generic';
import { Avatar, Details, Name } from './styles';

interface PatientCardProps {
	patient: IPatient;
	onEdit: (p: IPatient) => void;
}

export default function PatientCard({ patient, onEdit }: PatientCardProps) {
	return (
		<Card>
			<Name>{patient.name} </Name>
			{patient.avatar && <Avatar src={patient.avatar} alt={patient.name} />}
			<Details>
				<a href={patient.website} target='_blank' rel='noopener noreferrer'>
					Visit Website
				</a>
			</Details>

			{patient.description && (
				<Accordion openTitle={'Show Details'} hideTitle={'Hide Details'}>
					<Details>Description: {patient.description}</Details>
				</Accordion>
			)}

			<AppButton
				style={{
					marginTop: 'auto',
				}}
				onClick={() => onEdit(patient)}
			>
				Edit
			</AppButton>
		</Card>
	);
}

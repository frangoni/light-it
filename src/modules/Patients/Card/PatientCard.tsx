import type { IPatient } from '../_types';
import Accordion from '../../_shared/components/Accordion';
import { AppButton, Card } from '../../_shared/components/generic';
import { Avatar, CardHeader, Details, Name } from './styles';
interface PatientCardProps {
	patient: IPatient;
	onEdit: (p: IPatient) => void;
}

export default function PatientCard({ patient, onEdit }: PatientCardProps) {
	return (
		<Card>
			<CardHeader>
				<Name>{patient.name} </Name>
				{
					<Avatar
						src={patient.avatar || '/avatar.svg'}
						alt={patient.name}
						onError={e => (e.currentTarget.src = '/avatar.svg')}
					/>
				}
			</CardHeader>
			<Accordion openTitle={'Show Details'} hideTitle={'Hide Details'}>
				<Details>
					<a href={patient.website} target='_blank' rel='noopener noreferrer'>
						Visit Website
					</a>
				</Details>
				<Details>Description: {patient.description}</Details>{' '}
			</Accordion>

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

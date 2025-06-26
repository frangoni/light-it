import Modal from '../_shared/components/Dialog';
import { AppButton, Container, Header, Title } from '../_shared/components/generic';
import PatientForm from './Form/PatientForm';
import PatientList from './List/PatientList';
import usePatients from './usePatients';

export default function Patients() {
	const {
		handleAdd,
		handleEdit,
		patients,
		isPending,
		error,
		modalRef,
		setPatients,
		closeModal,
		selectedPatient,
		modalMode,
	} = usePatients();

	return (
		<Container>
			<Header>
				<Title>Patient Data Management</Title>
				<AppButton onClick={handleAdd}>Add Patient</AppButton>
			</Header>
			<PatientList onEdit={handleEdit} patients={patients} isPending={isPending} error={error} />

			<Modal ref={modalRef}>
				<PatientForm
					setPatients={setPatients}
					onSubmit={closeModal}
					initialData={selectedPatient}
					mode={modalMode}
				/>
			</Modal>
		</Container>
	);
}

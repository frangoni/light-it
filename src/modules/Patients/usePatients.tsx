import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import type { IPatient } from './types';
import useModal from '../_shared/hooks/useModal';

export default function usePatients() {
	const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);
	const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
	const { closeModal, modalRef, openModal } = useModal();
	const [patients, setPatients] = useState<IPatient[]>([]);

	const { error, data, isPending } = useQuery<IPatient[]>({
		queryKey: ['patientData'],
		queryFn: () => fetch('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users').then(res => res.json()),
	});

	useEffect(() => {
		if (data) setPatients(data);
	}, [data]);

	const handleEdit = (patient: IPatient) => {
		setSelectedPatient(patient);
		setModalMode('edit');
		openModal();
	};

	const handleAdd = () => {
		setSelectedPatient(null);
		setModalMode('add');
		openModal();
	};

	return {
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
	};
}

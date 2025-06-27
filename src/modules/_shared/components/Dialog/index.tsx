import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { ReactNode } from 'react';
import { DialogCard, DialogContent, StyledDialog } from './styles';
import useKeyBindings from '../../hooks/useKeyBindings';
import { AppButton } from '../generic';

interface ModalProps {
	children: ReactNode;
}

export interface ModalHandle {
	open: () => void;
	close: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useKeyBindings([{ key: 'Escape', callback: () => dialogRef.current?.close() }]);

	useImperativeHandle(ref, () => ({
		open: () => dialogRef.current?.show(),
		close: () => dialogRef.current?.close(),
	}));

	return (
		<StyledDialog ref={dialogRef}>
			<DialogCard>
				<DialogContent>{children}</DialogContent>
			</DialogCard>
			<AppButton id='closeModal' onClick={() => dialogRef.current?.close()}>
				X
			</AppButton>
		</StyledDialog>
	);
});

export default Modal;

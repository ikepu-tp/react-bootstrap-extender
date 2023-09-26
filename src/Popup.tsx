import { Modal, ModalProps } from 'react-bootstrap';

export type PopupProps = ModalProps & {
	header?: string | JSX.Element | any;
	footer?: string | JSX.Element | any;
};
export default function Popup({ header, footer, children, ...props }: PopupProps): JSX.Element {
	return (
		<Modal animation scrollable centered {...props}>
			{header && <Modal.Header closeButton>{header}</Modal.Header>}
			<Modal.Body>{children}</Modal.Body>
			{footer && <Modal.Footer>{footer}</Modal.Footer>}
		</Modal>
	);
}

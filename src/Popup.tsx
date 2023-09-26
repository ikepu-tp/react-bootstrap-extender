import React from 'react';
import { Modal } from 'react-bootstrap';

export type PopupProps = React.PropsWithChildren & {
	show: boolean;
	size?: 'sm' | 'lg' | 'xl';
	onHide: () => void;
	header: string | JSX.Element | any;
	footer?: string | JSX.Element | any;
};
export default function Popup(props: PopupProps): JSX.Element {
	return (
		<Modal show={props.show} size={props.size} onHide={props.onHide} animation scrollable centered>
			<Modal.Header closeButton>{props.header}</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
			{props.footer && <Modal.Footer>{props.footer}</Modal.Footer>}
		</Modal>
	);
}

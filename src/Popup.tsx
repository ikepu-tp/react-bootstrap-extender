import React, { useEffect, useState } from 'react';
import { Modal, ModalProps } from 'react-bootstrap';

export type PopupProps = ModalProps & {
	header?: string | JSX.Element | React.ReactNode | any;
	footer?: string | JSX.Element | React.ReactNode | any;
	showToggle?: string | JSX.Element | React.ReactNode | any;
};
export default function Popup({
	header,
	footer,
	children,
	show,
	onHide,
	showToggle,
	...props
}: PopupProps): JSX.Element {
	const [Show, setShow] = useState<boolean>(false);

	useEffect(() => {
		if (show !== undefined) setShow(show);
	}, [show]);
	function changeShow(): void {
		setShow(!Show);
		if (onHide) onHide();
	}
	return (
		<>
			{showToggle && (
				<div className="d-inline-block" onClick={changeShow}>
					{showToggle}
				</div>
			)}
			<Modal animation scrollable centered {...props} show={Show} onHide={changeShow}>
				{header && <Modal.Header closeButton>{header}</Modal.Header>}
				<Modal.Body>{children}</Modal.Body>
				{footer && <Modal.Footer>{footer}</Modal.Footer>}
			</Modal>
		</>
	);
}

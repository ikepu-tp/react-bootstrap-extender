import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Alert, AlertProps, Col, Row } from 'react-bootstrap';

export type AlertBoxProps = PropsWithChildren &
	AlertProps & { Header?: React.ReactNode; close?: boolean; timeout?: number };
export default function AlertBox({ children, Header, close, timeout, ...props }: AlertBoxProps): JSX.Element {
	const [Show, setShow] = useState<boolean>(true);

	useEffect(() => {
		if (!close || !timeout) return;
		setTimeout(changeShow, timeout);
	}, [close, timeout]);
	function changeShow(): void {
		setShow(!Show);
	}
	return (
		<Alert {...props} dismissible={close} show={Show} onClose={changeShow}>
			<Row>
				<Col xs>
					{Header && <Alert.Heading>{Header}</Alert.Heading>}
					{children}
				</Col>
			</Row>
		</Alert>
	);
}

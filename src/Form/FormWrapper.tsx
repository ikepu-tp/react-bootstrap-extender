import React, { FormEvent, useEffect, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';

export type ResponseResource<T = any> = {
	payloads?: T;
	error?: ErrorResource;
};
export type ErrorResource = {
	abstract?: string;
	title?: string;
	code?: number;
	messages?: (string | { [s: string]: any })[];
};
export type ErrorMessagesProps = {
	messages?: (string | { [s: string]: any })[] | (string | { [s: string]: any } | any);
};
export type FormWrapperProps = React.PropsWithChildren & {
	onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<ResponseResource>;
	setButtonDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
	success?: (payloads: object | any) => void;
	successMessage?: string;
	ErrorMessages?: (props: ErrorMessagesProps) => JSX.Element;
};
export default function FormWrapper(props: FormWrapperProps): JSX.Element {
	const [Validated, setValidated] = useState<boolean>(false);
	const [ButtonDisabled, setButtonDisabled] = useState<boolean>(false);
	const [Error, setError] = useState<undefined | ErrorResource>(undefined);
	const [Success, setSuccess] = useState<boolean>(false);

	useEffect(() => {
		if (props.setButtonDisabled) props.setButtonDisabled(ButtonDisabled);
	}, [ButtonDisabled]);

	async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();
		setButtonDisabled(true);
		setError(undefined);
		if (!e.currentTarget.checkValidity()) {
			setValidated(true);
			setButtonDisabled(false);
			return;
		}
		setValidated(false);
		const response: ResponseResource = await props.onSubmit(e);
		if (response.error) setError({ ...response.error });
		if (!response.error) {
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
			}, 5000);
		}
		if (response.payloads && props.success) props.success(response.payloads);
		setButtonDisabled(false);
	}
	return (
		<Form noValidate validated={Validated} onSubmit={onSubmit}>
			{Error && (
				<Alert variant="warning">
					<Alert.Heading>
						{Error.abstract && <span>[{Error.abstract}]</span>}
						{Error.title && <span>{Error.title}</span>}
					</Alert.Heading>
					{Error.messages && props.ErrorMessages ? (
						<props.ErrorMessages messages={Error.messages} />
					) : (
						<ErrorMessages messages={ErrorMessages} />
					)}
				</Alert>
			)}
			{Success && <Alert variant="success">{props.successMessage || '処理に成功しました'}</Alert>}
			{props.children}
		</Form>
	);
}

export function ErrorMessages(props: ErrorMessagesProps): JSX.Element {
	//配列
	if (Array.isArray(props.messages))
		return (
			<ul>
				{props.messages.map(
					(message: string | { [s: string]: any }, idx: number): JSX.Element => (
						<ErrorMessages messages={message} key={`errorMessageArray-${idx}`} />
					)
				)}
			</ul>
		);
	//文字列
	if (typeof props.messages === 'string' || props.messages instanceof String) return <li>{props.messages}</li>;
	//オブジェクト
	if (props.messages !== null && typeof props.messages === 'object')
		return (
			<>
				{Object.keys(props.messages).map(
					(key: string, idx): JSX.Element => (
						<ErrorMessages messages={props.messages[key]} key={`errorMessageObject-${idx}`} />
					)
				)}
			</>
		);
	//その他
	return <></>;
}

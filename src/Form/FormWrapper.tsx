import React, { FormEvent, useEffect, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import useForm, { FormContext } from './FormContext';

export type ResponseResource<T = any> = {
	payloads?: T;
	error?: ErrorResource;
};
export type ErrorMessagesType = (string | { [s: string]: any })[] | { [s: string]: any } | string;
export type ErrorResource = {
	abstract?: string;
	title?: string;
	code?: number;
	messages?: (string | { [s: string]: any })[] | { [s: string]: any };
};
export type ErrorMessagesProps = {
	messages?: (string | { [s: string]: any })[] | (string | { [s: string]: any } | any);
};
export type FormWrapperProps = React.PropsWithChildren & {
	onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<ResponseResource>;
	setButtonDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
	success?: (payloads: object | any) => void;
	successMessage?: string;
	successMessageTimeout?: number;
	ErrorMessages?: (props: ErrorMessagesProps) => JSX.Element;
};
export default function FormWrapper(props: FormWrapperProps): JSX.Element {
	const [Validated, setValidated] = useState<boolean>(false);
	const [ButtonDisabled, setButtonDisabled] = useState<boolean>(false);
	//const [Error, setError] = useState<undefined | ErrorResource>(undefined);
	const [Success, setSuccess] = useState<boolean>(false);

	const Error = useForm();

	useEffect(() => {
		if (props.setButtonDisabled) props.setButtonDisabled(ButtonDisabled);
	}, [ButtonDisabled]);

	async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();
		setButtonDisabled(true);
		Error.changeError(undefined);
		if (!e.currentTarget.checkValidity()) {
			setValidated(true);
			setButtonDisabled(false);
			return;
		}
		setValidated(false);
		const response: ResponseResource = await props.onSubmit(e);
		if (response.error) {
			Error.changeError(response.error);
			setValidated(true);
		}
		if (!response.error) {
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
			}, props.successMessageTimeout || 5000);
		}
		if (response.payloads && props.success) props.success(response.payloads);
		setButtonDisabled(false);
	}
	return (
		<FormContext.Provider value={Error}>
			<Form noValidate validated={Validated} onSubmit={onSubmit}>
				{Error.getError() && (
					<Alert variant="warning">
						<Alert.Heading>
							{Error.getError('abstract') && <span>[{Error.getError('abstract')}]</span>}
							{Error.getError('title') && <span>{Error.getError('title')}</span>}
						</Alert.Heading>
						{Error.getError('messages') && props.ErrorMessages ? (
							<props.ErrorMessages messages={Error.getError('messages')} />
						) : (
							<ErrorMessages messages={Error.getError('messages')} ignoreObject />
						)}
					</Alert>
				)}
				{Success && <Alert variant="success">{props.successMessage || '処理に成功しました'}</Alert>}
				{props.children}
			</Form>
		</FormContext.Provider>
	);
}

export function ErrorMessages(props: ErrorMessagesProps & { ignoreObject?: boolean }): JSX.Element {
	if (props.messages === undefined) return <></>;
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
	if (props.messages !== null && typeof props.messages === 'object') {
		if (props.ignoreObject) return <></>;
		return (
			<ul className="mb-0">
				{Object.keys(props.messages).map(
					(key: string, idx): JSX.Element => (
						<ErrorMessages messages={props.messages[key]} key={`errorMessageObject-${idx}`} />
					)
				)}
			</ul>
		);
	}
	//その他
	return <></>;
}

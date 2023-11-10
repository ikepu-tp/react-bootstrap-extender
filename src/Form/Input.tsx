import { Form, FormControlProps, InputGroup } from 'react-bootstrap';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FormContext } from './FormContext';
import { ErrorMessages, ErrorMessagesType } from './FormWrapper';

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
	FormControlProps &
	InputGroupWrapperProps & {
		validMessage?: string[];
		invalidMessage?: string[];
		countShow?: boolean;
		autoResize?: boolean;
	};
export default function Input({
	validMessage,
	invalidMessage,
	beforeText,
	afterText,
	onChange,
	countShow = true,
	autoResize = true,
	...props
}: InputProps): JSX.Element {
	const [Messages, setMessages] = useState<undefined | ErrorMessagesType>();
	const [Count, setCount] = useState<number>((props.value?.toString() || props.defaultValue?.toString() || '').length);
	const formContext = useContext(FormContext);

	useEffect(() => {
		const messages = formContext.getError('messages');
		if (messages === undefined) {
			setMessages(undefined);
			return;
		}
		if (props.name && messages[props.name]) {
			setMessages({ ...{}, ...messages[props.name] });
		} else {
			setMessages(undefined);
		}
	}, [formContext.getError('messages')]);

	function onChangeInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		resizeHeight(e);
		setCount(e.currentTarget.value.length);
		if (onChange) onChange(e);
	}
	function resizeHeight(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		if (props.as !== 'textarea' || !autoResize) return;
		e.currentTarget.style.height = '0px';
		e.currentTarget.style.minHeight = '0px';
		e.currentTarget.style.minHeight = `${Math.max(e.currentTarget.scrollHeight + 2, 62)}px`;
	}
	return (
		<>
			<InputGroupWrapper beforeText={beforeText} afterText={afterText}>
				<Form.Control
					{...props}
					placeholder={props.placeholder}
					isInvalid={props.isInvalid || (Messages ? true : false)}
					className={(props.className || '') + (props.isInvalid || (Messages ? true : false) ? ' border-danger' : '')}
					onChange={onChangeInput}
				/>
				{validMessage && (
					<Form.Control.Feedback className="ms-2">
						<ul>
							{validMessage.map(
								(mes: string): JSX.Element => (
									<li key={mes}>{mes}</li>
								)
							)}
						</ul>
					</Form.Control.Feedback>
				)}
				{(invalidMessage ||
					(formContext.Error?.messages &&
						props.name &&
						!Array.isArray(formContext.Error.messages) &&
						formContext.Error.messages[props.name])) && (
					<Form.Control.Feedback type="invalid" className="ms-2 mb-2">
						{invalidMessage && (
							<ul className="mb-0">
								{invalidMessage.map(
									(mes: string): JSX.Element => (
										<li key={mes}>{mes}</li>
									)
								)}
							</ul>
						)}
						{formContext.Error?.messages &&
							props.name &&
							!Array.isArray(formContext.Error.messages) &&
							formContext.Error.messages[props.name] && (
								<ErrorMessages messages={formContext.Error.messages[props.name]} />
							)}
					</Form.Control.Feedback>
				)}
			</InputGroupWrapper>
			{countShow && whichShowCount(props.type) && (
				<Form.Text className="d-block text-end">
					{Count}
					{props.maxLength && `/${props.maxLength}`}words
				</Form.Text>
			)}
		</>
	);
}

function whichShowCount(type: string | undefined = undefined): boolean {
	switch (type) {
		case 'date':
		case 'datetime':
		case 'datetime-local':
		case 'time':
			return false;
		default:
			return true;
	}
}

type InputGroupWrapperProps = {
	beforeText?: React.ReactNode[] | React.ReactNode;
	afterText?: React.ReactNode[] | React.ReactNode;
};
function InputGroupWrapper(props: React.PropsWithChildren & InputGroupWrapperProps): JSX.Element {
	if (!props.beforeText && !props.afterText) return <>{props.children}</>;
	return (
		<>
			<InputGroup>
				{props.beforeText &&
					(Array.isArray(props.beforeText) ? (
						props.beforeText.map((node: React.ReactNode): JSX.Element => <InputGroup.Text>{node}</InputGroup.Text>)
					) : (
						<InputGroup.Text>{props.beforeText}</InputGroup.Text>
					))}
				{props.children}
				{props.afterText &&
					(Array.isArray(props.afterText) ? (
						props.afterText.map((node: React.ReactNode): JSX.Element => <InputGroup.Text>{node}</InputGroup.Text>)
					) : (
						<InputGroup.Text>{props.afterText}</InputGroup.Text>
					))}
			</InputGroup>
		</>
	);
}

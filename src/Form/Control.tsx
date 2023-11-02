import { Form, FormControlProps, InputGroup } from 'react-bootstrap';
import InputWrapper from './InputWrapper';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FormContext } from './FormContext';
import { ErrorMessages, ErrorMessagesType } from './FormWrapper';

export type ControlProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
	FormControlProps & {
		label: string;
		validMessage?: string[];
		invalidMessage?: string[];
		beforeText?: React.ReactNode[] | React.ReactNode;
		afterText?: React.ReactNode[] | React.ReactNode;
		wrapperClassName?: string;
		countShow?: boolean;
	};
export default function Control({
	label,
	validMessage,
	invalidMessage,
	beforeText,
	afterText,
	wrapperClassName,
	onChange,
	countShow = true,
	...props
}: ControlProps): JSX.Element {
	const [Messages, setMessages] = useState<undefined | ErrorMessagesType>();
	const [Count, setCount] = useState<number>((props.value?.toString || props.defaultValue?.toString || '').length);
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
		setCount(e.currentTarget.value.length);
		if (onChange) onChange(e);
	}
	return (
		<InputWrapper
			label={label}
			required={props.required}
			name={props.name}
			feedbackMessage={false}
			className={wrapperClassName}
		>
			<InputGroup>
				{beforeText &&
					(Array.isArray(beforeText) ? (
						beforeText.map((node: React.ReactNode): JSX.Element => <InputGroup.Text>{node}</InputGroup.Text>)
					) : (
						<InputGroup.Text>{beforeText}</InputGroup.Text>
					))}
				<Form.Control
					{...props}
					placeholder={props.placeholder || label}
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
				{afterText &&
					(Array.isArray(afterText) ? (
						afterText.map((node: React.ReactNode): JSX.Element => <InputGroup.Text>{node}</InputGroup.Text>)
					) : (
						<InputGroup.Text>{afterText}</InputGroup.Text>
					))}
			</InputGroup>
			{countShow && whichShowCount(props.type) && (
				<Form.Text className="d-block text-end">
					{Count}
					{props.maxLength && `/${props.maxLength}`}words
				</Form.Text>
			)}
		</InputWrapper>
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

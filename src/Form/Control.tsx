import { Form, FormControlProps, InputGroup } from 'react-bootstrap';
import InputWrapper from './InputWrapper';
import React, { useContext, useEffect, useState } from 'react';
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
	};
export default function Control({
	label,
	validMessage,
	invalidMessage,
	beforeText,
	afterText,
	wrapperClassName,
	...props
}: ControlProps): JSX.Element {
	const [Messages, setMessages] = useState<undefined | ErrorMessagesType>();
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
					{Messages && <ErrorMessages messages={Messages} />}
				</Form.Control.Feedback>
				{afterText &&
					(Array.isArray(afterText) ? (
						afterText.map((node: React.ReactNode): JSX.Element => <InputGroup.Text>{node}</InputGroup.Text>)
					) : (
						<InputGroup.Text>{afterText}</InputGroup.Text>
					))}
			</InputGroup>
		</InputWrapper>
	);
}

import { Form, FormSelectProps, InputGroup } from 'react-bootstrap';
import InputWrapper from './InputWrapper';
import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './FormContext';
import { ErrorMessages, ErrorMessagesType } from './FormWrapper';

export type SelectProps = FormSelectProps &
	React.PropsWithChildren & {
		label: string;
		validMessage?: string[];
		invalidMessage?: string[];
		beforeText?: React.ReactNode[] | React.ReactNode;
		afterText?: React.ReactNode[] | React.ReactNode;
		wrapperClassName?: string;
		pleaseOption?: boolean;
		pleaseOptionMessage?: string;
	};
export default function Select({
	label,
	validMessage,
	invalidMessage,
	beforeText,
	afterText,
	wrapperClassName,
	pleaseOption = true,
	pleaseOptionMessage = '選択してください',
	...props
}: SelectProps): JSX.Element {
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
				<Form.Select
					{...props}
					placeholder={props.placeholder || label}
					title={props.title || label}
					isInvalid={props.isInvalid || (Messages ? true : false)}
					className={(props.className || '') + (props.isInvalid || (Messages ? true : false) ? ' border-danger' : '')}
				>
					{pleaseOption && <option label={pleaseOptionMessage} className="d-none" />}
					{props.children}
				</Form.Select>
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

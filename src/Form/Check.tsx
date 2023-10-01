import { Form, FormCheckProps } from 'react-bootstrap';
import InputWrapper from './InputWrapper';
import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './FormContext';
import { ErrorMessages, ErrorMessagesType } from './FormWrapper';
import { createKey } from '..';

export type CheckProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
	FormCheckProps & {
		label: string;
		validMessage?: string[];
		invalidMessage?: string[];
		wrapperClassName?: string;
	};
export default function Check({ validMessage, invalidMessage, wrapperClassName, ...props }: CheckProps): JSX.Element {
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
			label={props.label}
			required={props.required}
			name={props.name}
			feedbackMessage={false}
			className={wrapperClassName}
		>
			<Form.Check
				{...props}
				id={props.id || createKey()}
				isInvalid={props.isInvalid || (Messages ? true : false)}
				className={(props.className || '') + (props.isInvalid || (Messages ? true : false) ? ' border-danger' : '')}
			/>
			{validMessage && (
				<div className="ms-2 text-success">
					<ul>
						{validMessage.map(
							(mes: string): JSX.Element => (
								<li key={mes}>{mes}</li>
							)
						)}
					</ul>
				</div>
			)}
			<div className="ms-2 mb-2 text-danger">
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
			</div>
		</InputWrapper>
	);
}

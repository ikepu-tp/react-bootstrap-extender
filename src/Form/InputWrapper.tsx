import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormContext } from './FormContext';
import { ErrorMessages } from './FormWrapper';

export type InputWrapperProps = React.PropsWithChildren & {
	label: string;
	description?: React.ReactNode;
	required?: boolean;
	name?: string;
	feedbackMessage?: boolean;
	className?: string;
};
export default function InputWrapper(props: InputWrapperProps): JSX.Element {
	const formContext = useContext(FormContext);
	return (
		<div className={'mb-2 ' + props.className}>
			<Form.Label className="mb-1">
				{props.label}
				{props.required && <span className="text-danger">＊</span>}
			</Form.Label>
			<Form.Text className="mb-2 ps-2 d-block">{props.description}</Form.Text>
			{props.children}
			{props.feedbackMessage &&
				props.name &&
				formContext.getError('messages') &&
				formContext.getError('messages')[props.name] && (
					<div className="text-danger ms-1">
						<ErrorMessages messages={formContext.getError('messages')[props.name]} />
					</div>
				)}
		</div>
	);
}

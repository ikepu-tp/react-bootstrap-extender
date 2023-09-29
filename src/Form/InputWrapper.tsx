import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormContext } from './FormContext';
import { ErrorMessages } from './FormWrapper';

export type InputWrapperProps = React.PropsWithChildren & {
	label: string;
	required?: boolean;
	name?: string;
};
export default function InputWrapper(props: InputWrapperProps): JSX.Element {
	const formContext = useContext(FormContext);
	return (
		<div className="mb-2">
			<Form.Label>
				{props.label}
				{props.required && <span className="text-danger">＊</span>}
			</Form.Label>
			<div className="ms-2">{props.children}</div>
			{props.name && formContext.getError('messages') && formContext.getError('messages')[props.name] && (
				<div className="text-danger ms-1">
					<ErrorMessages messages={formContext.getError('messages')[props.name]} />
				</div>
			)}
		</div>
	);
}

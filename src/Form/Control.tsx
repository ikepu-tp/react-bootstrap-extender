import InputWrapper, { InputWrapperProps } from './InputWrapper';
import Input, { InputProps } from './Input';

export type ControlProps = InputProps &
	InputWrapperProps & {
		label: string;
		wrapperClassName?: string;
	};
export default function Control({ label, wrapperClassName, description, ...props }: ControlProps): JSX.Element {
	return (
		<InputWrapper
			label={label}
			required={props.required}
			name={props.name}
			feedbackMessage={false}
			className={wrapperClassName}
			description={description}
		>
			<Input {...props} placeholder={props.placeholder || label} />
		</InputWrapper>
	);
}

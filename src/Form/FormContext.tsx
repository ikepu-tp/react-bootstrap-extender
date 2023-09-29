import { createContext, useState } from 'react';
import { ErrorResource } from './FormWrapper';

export type FormContextType = {
	getError: (key?: keyof ErrorResource) => undefined | ErrorResource | any;
	changeError: (error: undefined | ErrorResource) => void;
};
export const FormContext = createContext<FormContextType>({
	getError: () => undefined,
	changeError: () => {},
});
export default function useForm(): FormContextType {
	const [ErrorR, setError] = useState<undefined | ErrorResource>();

	function getError(key: keyof ErrorResource | undefined = undefined): undefined | ErrorResource | any {
		if (key === undefined) return ErrorR;
		if (ErrorR === undefined) return ErrorR;
		if (ErrorR[key]) return ErrorR[key];
		throw new Error('Unexpected.');
	}
	function changeError(error: undefined | ErrorResource = undefined): void {
		setError(error === undefined ? undefined : { ...{}, ...error });
	}
	return {
		getError: getError,
		changeError: changeError,
	};
}
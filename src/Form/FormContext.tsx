import { createContext, useState } from 'react';
import { ErrorResource } from './FormWrapper';

export type FormContextType = {
	Error?: ErrorResource;
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
		return undefined;
	}
	function changeError(error: undefined | ErrorResource = undefined): void {
		setError(error === undefined ? undefined : { ...{}, ...error });
	}
	return {
		Error: ErrorR,
		getError: getError,
		changeError: changeError,
	};
}

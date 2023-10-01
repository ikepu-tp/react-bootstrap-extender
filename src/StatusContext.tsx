import { createContext, useState } from 'react';

export type StatusResource = {
	title?: React.ReactNode;
	body: React.ReactNode;
};
export type StatusContextType = {
	Flush: null | StatusResource;
	getFlush: () => null | StatusResource;
	changeFlush: (status: null | StatusResource) => void;
	removeFlush: () => void;
};
export const StatusContext = createContext<StatusContextType>({
	Flush: { body: '' },
	getFlush: () => null,
	changeFlush: () => {},
	removeFlush: () => {},
});
export function useStatus(): StatusContextType {
	const [Flush, setFlush] = useState<null | StatusResource>(null);

	function getFlush(): null | StatusResource {
		return Flush;
	}
	function changeFlush(status: null | StatusResource = null): void {
		setFlush(status === null ? null : { ...{}, ...status });
	}
	function removeFlush(): void {
		setFlush(null);
	}
	return {
		Flush: Flush,
		getFlush: getFlush,
		changeFlush: changeFlush,
		removeFlush: removeFlush,
	};
}

import React, { useContext } from 'react';
import { StatusContext } from '.';
import { useStatus } from './StatusContext';

export type StatusWrapperProps = React.PropsWithChildren;
export function StatusWrapper(props: StatusWrapperProps): JSX.Element {
	const Status = useStatus();
	return (
		<StatusContext.Provider value={Status}>
			{props.children}
			{JSON.stringify(Status)}
		</StatusContext.Provider>
	);
}
export type StatusViewProps = React.PropsWithChildren & {};
export function StatusView(props: StatusViewProps): JSX.Element {
	const Status = useContext(StatusContext);
	return (
		<div>
			{Status.getFlush()?.title}
			{Status.getFlush()?.body}
			{props.children}
		</div>
	);
}

export default Object.assign({}, StatusView, {
	Wrapper: StatusWrapper,
	View: StatusView,
});

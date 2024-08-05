import React from 'react';
import { TableProps as BaseTableProps, Table as BaseTable } from 'react-bootstrap';
import './../scss/style.css';

export type TableProps = BaseTableProps & {
	fixedTitle?: boolean;
	wrapperHeight?: string;
};
export default function Table({ fixedTitle, wrapperHeight, ...props }: TableProps): React.ReactNode {
	if (!fixedTitle) return <BaseTable {...props} />;

	const WrapperStyle: React.CSSProperties = {
		height: wrapperHeight,
	};

	return (
		<>
			<div className={'all-on-screen'} style={WrapperStyle}>
				<div className={'fixed-table__wrapper'}>
					<BaseTable {...props} className={`${props.className || ''} fixed-table`} />
				</div>
			</div>
		</>
	);
}

import { useEffect, useState } from 'react';
import Paginate from './Paginate';

export type PaginationMetaResource = {
	currentPage: number;
	lastPage: number;
	length: number;
	getLength: number;
	per: number;
};
export type PaginationResource<T = object> = {
	meta: PaginationMetaResource;
	items: T[];
};
export type ListViewProps<ItemProps = any, ItemResource = any> = {
	getItems: (props: ItemProps) => Promise<PaginationResource<ItemResource> | false>;
	itemWrapper: any;
	itemCallback: (value: object | any, index: number, array: object[]) => JSX.Element;
	reload?: string;
};
export default function ListView(props: ListViewProps): JSX.Element {
	const [Page, setPage] = useState<number>(1);
	const [Payloads, setPayloads] = useState<PaginationResource | undefined>();

	useEffect(() => {
		getItems();
	}, [Page, props.reload]);
	async function getItems(): Promise<void> {
		const payloads = await props.getItems({ page: Page });
		if (!payloads) return;
		setPayloads({ ...{}, ...payloads });
	}
	if (!Payloads) return <></>;
	return (
		<>
			<div className="mb-2">
				{Payloads.meta.length}件中{Payloads.meta.getLength}件表示中
			</div>
			<props.itemWrapper>{Payloads.items.map(props.itemCallback)}</props.itemWrapper>
			<div className="mt-2">
				<Paginate meta={Payloads.meta} setPage={setPage} />
			</div>
		</>
	);
}

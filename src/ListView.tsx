import { ChangeEvent, useEffect, useState } from 'react';
import Paginate from './Paginate';
import { Button, Col, Form, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { Control, InputWrapper } from './Form';

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
export type FilterType = {
	per?: number | string;
	keyword?: number | string;
	order?: number | string | 'asc' | 'desc';
};
export type ListViewProps<ItemProps = any, ItemResource = any, Filter = FilterType> = {
	getItems: (props: ItemProps) => Promise<PaginationResource<ItemResource> | false>;
	itemWrapper: any;
	itemCallback: (value: object | any, index: number, array: object[]) => JSX.Element;
	reload?: string;
	filter?: Filter | FilterType;
};
export default function ListView(props: ListViewProps): JSX.Element {
	const [Page, setPage] = useState<number>(1);
	const [Payloads, setPayloads] = useState<PaginationResource | undefined>();
	const [Filter, setFilter] = useState<FilterType | typeof props.filter>({
		...{},
		...(props.filter || { per: 10, order: 'asc' }),
	});

	useEffect(() => {
		getItems();
	}, [Page, props.reload]);
	async function getItems(): Promise<void> {
		const payloads = await props.getItems({ page: Page, ...Filter });
		if (!payloads) return;
		setPayloads({ ...{}, ...payloads });
	}
	function changeFilter(key: keyof (FilterType | typeof props.filter), value: string | number | undefined) {
		if (Filter === undefined) return;
		if (value === undefined) {
			if (Filter[key]) delete Filter[key];
		} else {
			Filter[key] = value as never;
		}
		setFilter({ ...{}, ...Filter });
	}
	if (!Payloads) return <></>;
	return (
		<>
			<div className="mb-2">
				<Row className="justify-content-between">
					<Col xs="auto" sm="auto" className="mt-2">
						{Payloads.meta.length}件中{Payloads.meta.getLength}件表示中
					</Col>
					<Col xs="auto" sm="auto" className="mt-2">
						<FilterElement Filter={Filter} changeFilter={changeFilter} update={getItems} />
					</Col>
				</Row>
			</div>
			<props.itemWrapper>{Payloads.items.map(props.itemCallback)}</props.itemWrapper>
			<div className="mt-2">
				<Paginate meta={Payloads.meta} setPage={setPage} />
			</div>
		</>
	);
}
function FilterElement(props: {
	Filter: FilterType;
	changeFilter: (key: keyof FilterType, value: string | number | undefined) => void;
	update: () => Promise<void> | void;
}): JSX.Element {
	const [FilterShow, setFilterShow] = useState<boolean>(false);

	function changeFilterShow(): void {
		setFilterShow(!FilterShow);
	}
	function onChangeFilter(e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>): void {
		props.changeFilter(e.currentTarget.name as keyof FilterType, e.currentTarget.value);
	}
	function onClickUpdate(): void {
		changeFilterShow();
		props.update();
	}
	return (
		<OverlayTrigger
			trigger={['click']}
			placement="bottom-end"
			show={FilterShow}
			onToggle={changeFilterShow}
			overlay={
				<Popover id="listview-filter">
					<Popover.Header>絞り込み</Popover.Header>
					<Popover.Body className="w-100">
						<Row>
							<Col sm="auto" className="mt-1">
								<Row>
									<Col>
										<InputWrapper label="表示件数">
											<Form.Select name="per" value={props.Filter['per'] || 10} onChange={onChangeFilter}>
												<option value="10">10</option>
												<option value="50">50</option>
												<option value="100">100</option>
											</Form.Select>
										</InputWrapper>
									</Col>
									<Col>
										<InputWrapper label="表示順序">
											<Form.Select name="order" value={props.Filter['order'] || 'asc'} onChange={onChangeFilter}>
												<option value="asc">降順</option>
												<option value="desc">昇順</option>
											</Form.Select>
										</InputWrapper>
									</Col>
								</Row>
							</Col>
							<Col sm="auto" className="mt-1">
								<Control
									label="キーワード"
									type="search"
									name="keyword"
									value={props.Filter['keyword'] || ''}
									onChange={onChangeFilter}
								/>
							</Col>
						</Row>
						<Row className="justify-content-end">
							<Col sm="auto" className="mt-1">
								<Button variant="primary" type="button" onClick={onClickUpdate}>
									絞り込み
								</Button>
							</Col>
						</Row>
					</Popover.Body>
				</Popover>
			}
		>
			<Button variant={FilterShow ? 'secondary' : 'outline-secondary'} type="button">
				絞り込み
			</Button>
		</OverlayTrigger>
	);
}

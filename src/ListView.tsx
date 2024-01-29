import { ChangeEvent, PropsWithChildren, useEffect, useRef, useState } from 'react';
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
export const FilterInit: FilterType = { per: 10, order: 'asc', keyword: '' };
export type FilterProps = PropsWithChildren & {
	except?: (keyof FilterType)[];
	only?: (keyof FilterType)[];
};
export type ListViewProps<ItemProps = any, ItemResource = any, Filter = FilterType> = {
	getItems: (props: ItemProps) => Promise<PaginationResource<ItemResource> | false>;
	itemWrapper: any;
	itemCallback: (value: object | any, index: number, array: object[]) => JSX.Element;
	reload?: string;
	filter?: Filter & FilterType;
	ConvertFilter?: (Filter: Filter) => string[];
	FilterProps?: FilterProps;
	moveToList?: boolean;
};
export default function ListView(props: ListViewProps): JSX.Element {
	const [Page, setPage] = useState<number>(1);
	const [Payloads, setPayloads] = useState<PaginationResource | undefined>();
	const [Filter, setFilter] = useState<FilterType & typeof props.filter>({
		...{},
		...(props.filter || { ...{}, ...FilterInit }),
	});
	const WrapperRef = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		getItems();
	}, [Page, props.reload, Filter]);

	async function getItems(): Promise<void> {
		const payloads = await props.getItems({ page: Page, ...Filter });
		if (!payloads) return;
		setPayloads({ ...{}, ...payloads });
		if (WrapperRef.current && props.moveToList)
			window.scroll({ top: WrapperRef.current.getBoundingClientRect().top + window.pageYOffset });
	}
	if (!Payloads) return <></>;
	return (
		<>
			<div className="mb-2" ref={WrapperRef}>
				<Row className="justify-content-between">
					<Col xs="auto" sm="auto" className="mt-2">
						{Payloads.meta.length}件中{Payloads.meta.getLength}件表示中
						<div className="text-muted" style={{ fontSize: '.75em' }}>
							検索条件：
							{(props.ConvertFilter ? props.ConvertFilter(Filter) : ConvertFilter(Filter)).join(',')}
						</div>
					</Col>
					<Col xs="auto" sm="auto" className="mt-2">
						<FilterElement Filter={Filter || {}} setFilter={setFilter} {...props.FilterProps} />
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
function ConvertFilter(
	Filter: FilterType,
	key_JP: { [s: string]: string } = {
		per: '取得件数',
		keyword: 'キーワード',
		order: '表示順序',
	},
	key_res: { [s: string]: string | { [s: string]: string } } = {
		per: '$$件',
		keyword: '$$',
		order: {
			asc: '昇順',
			desc: '降順',
		},
	}
): string[] {
	const filters: string[] = [];
	Object.keys(Filter).forEach((key: string): void => {
		const key_filter: keyof FilterType = key as keyof FilterType;
		if (!Filter[key_filter]) return;
		if (!key_JP[key] || !key_res[key]) return;
		let res: string = `${key_JP[key]}`;
		if (key_res[key][Filter[key_filter] as never]) {
			res += `（${key_res[key][Filter[key_filter] as never]}）`;
		} else {
			res += `（${(key_res[key] as string).replace('$$', Filter[key_filter] as string)}）`;
		}
		filters.push(res);
	});
	return filters;
}
function FilterElement(
	props: FilterProps & {
		Filter: FilterType;
		setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
	}
): JSX.Element {
	const [FilterShow, setFilterShow] = useState<boolean>(false);
	const [Filter, setFilter] = useState<FilterType>({ ...{}, ...props.Filter });
	const [FilterCan, setFilterCan] = useState<(keyof FilterType)[]>([]);

	useEffect(() => {
		let only: (keyof FilterType)[] = props.only || (Object.keys(FilterInit) as (keyof FilterType)[]);
		only = only.filter((value: keyof FilterType): boolean => {
			return (props.except || []).indexOf(value) === -1;
		});
		setFilterCan(only.concat([]));
	}, []);
	function changeFilterShow(): void {
		setFilterShow(!FilterShow);
	}
	function onChangeFilterStr(e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>): void {
		const key = e.currentTarget.name as keyof FilterType;
		if (e.currentTarget.value === '') {
			if (Filter[key]) delete Filter[key];
		} else {
			Filter[key] = e.currentTarget.value;
		}
		setFilter({ ...{}, ...Filter });
	}
	function onChangeFilterNum(e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>): void {
		const key = e.currentTarget.name as keyof FilterType;
		if (e.currentTarget.value === '') {
			if (Filter[key]) delete Filter[key];
		} else {
			Filter[key] = Number(e.currentTarget.value);
		}
		setFilter({ ...{}, ...Filter });
	}
	function onClickUpdate(): void {
		changeFilterShow();
		props.setFilter({ ...{}, ...Filter });
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
							{FilterCan.indexOf('per') > -1 && (
								<Col sm="auto" className="mt-1">
									<InputWrapper label="表示件数">
										<Form.Select name="per" value={Filter['per'] || 10} onChange={onChangeFilterNum}>
											<option value="10">10</option>
											<option value="50">50</option>
											<option value="100">100</option>
										</Form.Select>
									</InputWrapper>
								</Col>
							)}
							{FilterCan.indexOf('order') > -1 && (
								<Col sm="auto" className="mt-1">
									<InputWrapper label="表示順序">
										<Form.Select name="order" value={Filter['order'] || 'asc'} onChange={onChangeFilterStr}>
											<option value="asc">昇順</option>
											<option value="desc">降順</option>
										</Form.Select>
									</InputWrapper>
								</Col>
							)}
							{FilterCan.indexOf('keyword') > -1 && (
								<Col sm="auto" className="mt-1">
									<Control
										label="キーワード"
										type="search"
										name="keyword"
										value={Filter['keyword'] || ''}
										onChange={onChangeFilterStr}
										countShow={false}
									/>
								</Col>
							)}
						</Row>
						{props.children}
						<Row className="justify-content-end mt-2">
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

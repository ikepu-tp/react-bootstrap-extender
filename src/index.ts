export { default as AlertBox } from './AlertBox';
export { default as Anchor } from './Anchor';
export { default as ListView } from './ListView';
export { default as PageWrapper } from './PageWrapper';
export { default as Paginate } from './Paginate';
export { default as Popup } from './Popup';
export { default as Status, StatusWrapper } from './Status';
export { StatusContext, useStatus } from './StatusContext';
export { default as Table } from './Table';

export type { AlertBoxProps } from './AlertBox';
export type { AnchorProps } from './Anchor';
export type { PaginationMetaResource, PaginationResource, ListViewProps } from './ListView';
export type { BreadCrumbType, PageWrapperProps } from './PageWrapper';
export type { PaginateProps } from './Paginate';
export type { PopupProps } from './Popup';
export type { StatusResource, StatusContextType } from './StatusContext';
export type { TableProps } from './Table';

export function createKey(): string {
	return Math.random().toString(32).substring(2);
}

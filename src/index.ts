export { default as Anchor } from './Anchor';
export { default as ListView } from './ListView';
export { default as PageWrapper } from './PageWrapper';
export { default as Paginate } from './Paginate';
export { default as Popup } from './Popup';

export type { AnchorProps } from './Anchor';
export type { PaginationMetaResource, PaginationResource, ListViewProps } from './ListView';
export type { BreadCrumbType, PageWrapperProps } from './PageWrapper';
export type { PaginateProps } from './Paginate';
export type { PopupProps } from './Popup';

export function createKey(): string {
	return Math.random().toString(32).substring(2);
}

import { Pagination } from 'react-bootstrap';
import { PaginationMetaResource } from './ListView';

export type PaginateProps = {
	setPage: (page: number) => void;
	meta: PaginationMetaResource;
};
export default function Paginate(props: PaginateProps): JSX.Element {
	function toPrev(): void {
		props.setPage(Math.max(props.meta.currentPage - 1, 1));
	}
	function toNext(): void {
		props.setPage(Math.min(props.meta.lastPage, props.meta.currentPage + 1));
	}
	function toFirst(): void {
		props.setPage(1);
	}
	function toLast(): void {
		props.setPage(props.meta.lastPage);
	}
	return (
		<Pagination>
			<Pagination.First onClick={toFirst} disabled={props.meta.currentPage === 1} />
			<Pagination.Prev onClick={toPrev} disabled={props.meta.currentPage === 1} />
			{props.meta.currentPage !== 1 && (
				<>
					{props.meta.currentPage - 1 !== 1 && <Pagination.Ellipsis />}
					<Pagination.Item onClick={toPrev}>{props.meta.currentPage - 1}</Pagination.Item>
				</>
			)}
			<Pagination.Item active>{props.meta.currentPage}</Pagination.Item>
			{props.meta.currentPage !== props.meta.lastPage && (
				<>
					<Pagination.Item onClick={toNext}>{props.meta.currentPage + 1}</Pagination.Item>
					<Pagination.Ellipsis />
				</>
			)}
			<Pagination.Next onClick={toNext} disabled={props.meta.lastPage === props.meta.currentPage} />
			<Pagination.Last onClick={toLast} disabled={props.meta.currentPage === props.meta.lastPage} />
		</Pagination>
	);
}

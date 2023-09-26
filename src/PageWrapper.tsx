import React, { MouseEvent } from 'react';
import { Breadcrumb } from 'react-bootstrap';

export type BreadCrumbType = {
	link: string;
	text: string;
};
export type PageWrapperProps = React.PropsWithChildren & {
	title: string;
	breadCrumb?: BreadCrumbType[];
	breadCrumbOnClick?: (e: MouseEvent<HTMLAnchorElement>, item: BreadCrumbType) => void;
};
export default function PageWrapper(props: PageWrapperProps): JSX.Element {
	return (
		<div>
			<h3>{props.title}</h3>
			{props.breadCrumb && (
				<Breadcrumb className="my-2">
					<Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
					{props.breadCrumb.map(
						(item: BreadCrumbType): JSX.Element => (
							<BreadcrumbItem key={item.text} item={item} navigate={props.breadCrumbOnClick} />
						)
					)}
					<Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
				</Breadcrumb>
			)}
			{props.children}
		</div>
	);
}

function BreadcrumbItem(props: {
	item: BreadCrumbType;
	navigate?: (e: MouseEvent<HTMLAnchorElement>, item: BreadCrumbType) => void;
}): JSX.Element {
	function onClick(e: MouseEvent<HTMLAnchorElement>): void {
		if (!props.navigate) return;
		e.preventDefault();
		props.navigate(e, props.item);
	}
	return (
		<Breadcrumb.Item href={props.item.link} onClick={onClick}>
			{props.item.text}
		</Breadcrumb.Item>
	);
}

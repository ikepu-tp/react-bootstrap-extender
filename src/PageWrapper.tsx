import React, { MouseEventHandler } from 'react';
import { Breadcrumb } from 'react-bootstrap';

export type BreadCrumbType = {
	link: string;
	text: string;
};
export type PageWrapperProps = React.PropsWithChildren & {
	title: string;
	breadCrumb?: BreadCrumbType[];
	breadCrumbOnClick?: MouseEventHandler<HTMLAnchorElement>;
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
							<BreadcrumbItem key={item.text} item={item} />
						)
					)}
					<Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
				</Breadcrumb>
			)}
			{props.children}
		</div>
	);
}

function BreadcrumbItem(props: { item: BreadCrumbType; onClick?: MouseEventHandler<HTMLAnchorElement> }): JSX.Element {
	return (
		<Breadcrumb.Item href={props.item.link} onClick={props.onClick}>
			{props.item.text}
		</Breadcrumb.Item>
	);
}

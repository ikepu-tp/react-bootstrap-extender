import React, { MouseEvent, MouseEventHandler, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';

export type BreadCrumbType = {
	link: string;
	text: string;
};
export type PageWrapperProps = React.PropsWithChildren & {
	title?: string;
	breadCrumb?: BreadCrumbType[];
	breadCrumbOnClick?: (e: MouseEvent<HTMLAnchorElement>, item: BreadCrumbType) => void;
	homeText?: React.ReactNode;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	changeTitle?: boolean;
	siteTitle?: string;
	titleSeparator?: string;
};
export default function PageWrapper(props: PageWrapperProps): JSX.Element {
	useEffect(() => {
		let title: string[] = [];
		if (props.title) title.push(props.title);
		if (props.siteTitle) title.push(props.siteTitle);
		document.title = title.join(` ${props.titleSeparator || '-'} `);
	}, [props.title]);
	return (
		<div>
			<h3>{props.title}</h3>
			{props.breadCrumb && (
				<Breadcrumb className="my-2">
					<Breadcrumb.Item href="/" onClick={props.onClick}>
						{props.homeText || 'HOME'}
					</Breadcrumb.Item>
					{props.breadCrumb.map(
						(item: BreadCrumbType): JSX.Element => (
							<BreadcrumbItem key={item.text} item={item} navigate={props.breadCrumbOnClick} onClick={props.onClick} />
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
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}): JSX.Element {
	function onClick(e: MouseEvent<HTMLAnchorElement>): void {
		if (props.onClick) {
			props.onClick(e);
			return;
		}
		if (props.navigate) {
			props.navigate(e, props.item);
			return;
		}
	}
	return (
		<Breadcrumb.Item href={props.item.link} onClick={onClick}>
			{props.item.text}
		</Breadcrumb.Item>
	);
}

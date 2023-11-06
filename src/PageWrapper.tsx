import React, { MouseEvent, MouseEventHandler, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';

export type BreadCrumbType = {
	link: string;
	text: string;
};
export type PageWrapperProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
	React.PropsWithChildren & {
		title?: string;
		breadCrumb?: BreadCrumbType[];
		breadCrumbOnClick?: (e: MouseEvent<HTMLAnchorElement>, item: BreadCrumbType) => void;
		homeText?: React.ReactNode;
		onClick?: MouseEventHandler<HTMLAnchorElement>;
		changeLink?: (link: string) => void;
		changeTitle?: boolean;
		siteTitle?: string;
		titleSeparator?: string;
	};
export default function PageWrapper({
	title,
	breadCrumb,
	breadCrumbOnClick,
	homeText,
	onClick,
	changeLink,
	changeTitle,
	siteTitle,
	titleSeparator,
	children,
	...props
}: PageWrapperProps): JSX.Element {
	useEffect(() => {
		let titles: string[] = [];
		if (title) titles.push(title);
		if (siteTitle) titles.push(siteTitle);
		document.title = titles.join(` ${titleSeparator || '-'} `);
	}, [title]);

	function homeOnClick(e: MouseEvent<HTMLAnchorElement>): void {
		if (changeLink) {
			e.preventDefault();
			return changeLink('/');
		}
		if (onClick) return onClick(e);
	}
	return (
		<>
			<div {...props}>
				<h3>{title}</h3>
				{breadCrumb && (
					<Breadcrumb className="my-2">
						<Breadcrumb.Item href="/" onClick={homeOnClick}>
							{homeText || 'HOME'}
						</Breadcrumb.Item>
						{breadCrumb.map(
							(item: BreadCrumbType): JSX.Element => (
								<BreadcrumbItem
									key={item.text}
									item={item}
									navigate={breadCrumbOnClick}
									onClick={onClick}
									changeLink={changeLink}
								/>
							)
						)}
						<Breadcrumb.Item active>{title}</Breadcrumb.Item>
					</Breadcrumb>
				)}
			</div>
			{children}
		</>
	);
}

function BreadcrumbItem(props: {
	item: BreadCrumbType;
	navigate?: (e: MouseEvent<HTMLAnchorElement>, item: BreadCrumbType) => void;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	changeLink?: (link: string) => void;
}): JSX.Element {
	function onClick(e: MouseEvent<HTMLAnchorElement>): void {
		if (props.navigate) return props.navigate(e, props.item);
		if (props.changeLink) {
			e.preventDefault();
			return props.changeLink(props.item.link);
		}
		if (props.onClick) return props.onClick(e);
	}
	return (
		<Breadcrumb.Item href={props.item.link} onClick={onClick}>
			{props.item.text}
		</Breadcrumb.Item>
	);
}

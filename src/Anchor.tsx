import React from 'react';

export type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
	as?: 'button' | 'normal';
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'dark'
		| 'light'
		| 'link'
		| 'outline-primary'
		| 'outline-secondary'
		| 'outline-success'
		| 'outline-danger'
		| 'outline-warning'
		| 'outline-info'
		| 'outline-dark'
		| 'outline-light';
};
export default function Anchor(props: AnchorProps): JSX.Element {
	return (
		<a
			{...props}
			className={(props.as === 'button' ? `btn btn-${props.variant || 'primary'} ` : '') + (props.className || '')}
		/>
	);
}

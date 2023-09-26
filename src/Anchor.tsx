import React from 'react';

export default function Anchor(
	props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
		as?: 'button';
		variant?: 'primary' | 'secondary' | 'warning' | 'danger';
	}
): JSX.Element {
	return (
		<a
			{...props}
			className={(props.as === 'button' ? `btn btn-${props.variant || 'primary'} ` : '') + (props.className || '')}
		/>
	);
}

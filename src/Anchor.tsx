import React from 'react';

export type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
	as?: 'button';
	variant?: 'primary' | 'secondary' | 'warning' | 'danger';
};
export default function Anchor(props: AnchorProps): JSX.Element {
	return (
		<a
			{...props}
			className={(props.as === 'button' ? `btn btn-${props.variant || 'primary'} ` : '') + (props.className || '')}
		/>
	);
}

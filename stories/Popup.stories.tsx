import type { Meta, StoryObj } from '@storybook/react';
import Popup, { PopupProps } from './../src/Popup';
import React, { PropsWithChildren, useEffect, useState } from 'react';

const meta = {
	title: 'Components/Popup',
	component: PopupComponent,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PopupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		show: false,
		header: 'タイトル',
		footer: 'フッター',
		children: '子要素',
		showToggle: undefined,
	},
};
export const HasShowToggle: Story = {
	args: {
		show: false,
		header: 'タイトル',
		footer: 'フッター',
		children: '子要素',
		showToggle: <button className="btn btn-secondary">表示</button>,
	},
};

function PopupComponent({ show, ...props }: PopupProps): JSX.Element {
	const [Show, setShow] = useState<boolean>(false);

	useEffect(() => {
		if (show !== undefined) setShow(show);
	}, [show]);
	function changeShow(): void {
		setShow(!Show);
	}
	return <Popup show={Show} onHide={changeShow} {...props} />;
}

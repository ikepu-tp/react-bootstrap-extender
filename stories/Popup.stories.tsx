import type { Meta, StoryObj } from '@storybook/react';
import Popup from './../src/Popup';
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
	},
};

function PopupComponent({
	show,
	...props
}: PropsWithChildren & { show: boolean; header?: string; footer?: string }): JSX.Element {
	const [Show, setShow] = useState<boolean>(show);

	useEffect(() => {
		setShow(show);
	}, [show]);
	function changeShow(): void {
		setShow(!Show);
	}
	return <Popup show={Show} onHide={changeShow} {...props} />;
}

import type { Meta, StoryObj } from '@storybook/react';
import AlertBox from './../src/AlertBox';

const meta = {
	title: 'Components/AlertBox',
	component: AlertBox,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof AlertBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		Header: 'Header',
		children: 'body',
		variant: 'primary',
	},
};
export const Closable: Story = {
	args: {
		Header: 'Header',
		children: 'body',
		variant: 'primary',
		close: true,
		timeout: 5000,
	},
};

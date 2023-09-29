import type { Meta, StoryObj } from '@storybook/react';
import Anchor from './../src/Anchor';

const meta = {
	title: 'Components/Anchor',
	component: Anchor,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		href: '#',
		children: 'Link Text',
		as: 'normal',
	},
};
export const PrimaryButton: Story = {
	args: {
		href: '#',
		children: 'Link Text',
		as: 'button',
		variant: 'primary',
	},
};
export const OutlinePrimaryButton: Story = {
	args: {
		href: '#',
		children: 'Link Text',
		as: 'button',
		variant: 'outline-primary',
	},
};

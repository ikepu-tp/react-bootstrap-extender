import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Check, Control } from './../../src/Form';

const meta = {
	title: 'Forms/Check',
	component: Check,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Check>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		type: 'checkbox',
		defaultChecked: true,
	},
};
export const ValidMessage: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		validMessage: ['フィードバック'],
		isValid: true,
		type: 'checkbox',
		defaultChecked: true,
	},
};
export const InvalidMessage: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		invalidMessage: ['フィードバック'],
		isInvalid: true,
		type: 'checkbox',
		defaultChecked: true,
	},
};
export const Radio: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		type: 'radio',
		defaultChecked: true,
	},
};
export const Switch: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		type: 'switch',
		defaultChecked: true,
	},
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Control } from './../../src/Form';

const meta = {
	title: 'Forms/Control',
	component: Control,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Control>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	label: '選択肢',
	required: true,
	name: 'name',
	countShow: false,
	type: 'text',
	autoResize: true,
};
export const Normal: Story = {
	args: {
		...defaultArgs,
	},
};
export const ValidMessage: Story = {
	args: {
		...defaultArgs,
		validMessage: ['フィードバック'],
		isValid: true,
	},
};
export const InvalidMessage: Story = {
	args: {
		...defaultArgs,
		invalidMessage: ['フィードバック'],
		isInvalid: true,
	},
};
export const CountShow: Story = {
	args: {
		...defaultArgs,
		countShow: true,
		maxLength: 50,
	},
};
export const BeforeText: Story = {
	args: {
		...defaultArgs,
		beforeText: ['Controlの前に', <span className="text-danger">要素を入れられます</span>],
	},
};
export const AfterText: Story = {
	args: {
		...defaultArgs,
		afterText: ['Controlの後に', <span className="text-danger">要素を入れられます</span>],
	},
};
export const TextArea: Story = {
	args: {
		...defaultArgs,
		as: 'textarea',
		countShow: true,
		maxLength: 50,
		beforeText: ['Controlの前に', <span className="text-danger">要素を入れられます</span>],
		afterText: ['Controlの後に', <span className="text-danger">要素を入れられます</span>],
	},
};

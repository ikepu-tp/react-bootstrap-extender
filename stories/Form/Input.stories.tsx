import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './../../src/Form';

const meta = {
	title: 'Forms/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: InputProps = {
	required: true,
	name: 'name',
	countShow: false,
	type: 'text',
	autoResize: true,
	placeholder: '入力してください',
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
		defaultValue: 'test',
	},
};
export const BeforeText: Story = {
	args: {
		...defaultArgs,
		beforeText: ['Inputの前に', <span className="text-danger">要素を入れられます</span>],
	},
};
export const AfterText: Story = {
	args: {
		...defaultArgs,
		afterText: ['Inputの後に', <span className="text-danger">要素を入れられます</span>],
	},
};
export const TextArea: Story = {
	args: {
		...defaultArgs,
		as: 'textarea',
		countShow: true,
		maxLength: 50,
		beforeText: ['Inputの前に', <span className="text-danger">要素を入れられます</span>],
		afterText: ['Inputの後に', <span className="text-danger">要素を入れられます</span>],
	},
};

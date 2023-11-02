import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './../../src/Form';

const meta = {
	title: 'Forms/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	label: '選択肢',
	required: true,
	name: 'name',
	pleaseOption: true,
	pleaseOptionMessage: '選択してください',
};
export const Normal: Story = {
	args: defaultArgs,
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

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

export const Normal: Story = {
	args: {
		label: '選択肢',
		required: true,
		name: 'name',
	},
};
export const ValidMessage: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		validMessage: ['フィードバック'],
		isValid: true,
	},
};
export const InvalidMessage: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		invalidMessage: ['フィードバック'],
		isInvalid: true,
	},
};
export const CountShow: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
	},
};
export const BeforeText: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		beforeText: ['Controlの前に', <span className="text-danger">要素を入れられます</span>],
	},
};
export const AfterText: Story = {
	args: {
		label: '名前',
		required: true,
		name: 'name',
		afterText: ['Controlの後に', <span className="text-danger">要素を入れられます</span>],
	},
};

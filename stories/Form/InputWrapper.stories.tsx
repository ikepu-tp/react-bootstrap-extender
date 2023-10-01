import type { Meta, StoryObj } from '@storybook/react';
import { InputWrapper } from './../../src/Form';
import React from 'react';
import { Form } from 'react-bootstrap';

const meta = {
	title: 'Forms/InputWrapper',
	component: InputWrapper,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof InputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		label: '項目1',
		required: true,
		children: <Form.Control type="text" placeholder="テキスト..." />,
		description: 'description',
	},
};

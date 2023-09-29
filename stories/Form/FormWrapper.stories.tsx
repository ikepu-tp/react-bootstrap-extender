import type { Meta, StoryObj } from '@storybook/react';
import { FormWrapper, InputWrapper, ResponseResource } from './../../src/Form';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const meta = {
	title: 'Forms/FormWrapper',
	component: FormWrapperComponent,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof FormWrapperComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		successMessage: '処理に成功しました',
		successMessageTimeout: 5000,
	},
};
export const Error: Story = {
	args: {
		successMessage: '処理に成功しました',
		successMessageTimeout: 5000,
		response: {
			error: {
				abstract: 'ERROR',
				title: 'エラー',
				code: 404,
				messages: ['エラーが発生しました', '管理者にお問い合わせください'],
			},
		},
	},
};
export const ValidationError: Story = {
	args: {
		successMessage: '処理に成功しました',
		successMessageTimeout: 5000,
		response: {
			error: {
				abstract: 'VALIDATION ERROR',
				title: '入力内容エラー',
				code: 406,
				messages: {
					text: ['必須項目です', '文字を入力してください'],
				},
			},
		},
	},
};

function FormWrapperComponent(props: {
	successMessage: string;
	successMessageTimeout: number;
	response?: ResponseResource;
}): JSX.Element {
	const [ButtonDisabled, setButtonDisabled] = useState<boolean>(false);
	async function onSubmit(): Promise<ResponseResource> {
		return props.response || {};
	}
	return (
		<FormWrapper
			onSubmit={onSubmit}
			setButtonDisabled={setButtonDisabled}
			successMessage={props.successMessage}
			successMessageTimeout={props.successMessageTimeout}
		>
			<InputWrapper label="項目1" required name="text">
				<Form.Control type="text" placeholder="text" />
			</InputWrapper>
			<Button variant="primary" type="submit" disabled={ButtonDisabled}>
				送信
			</Button>
		</FormWrapper>
	);
}

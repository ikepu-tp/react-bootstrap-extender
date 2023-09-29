import type { Meta, StoryObj } from '@storybook/react';
import { FormWrapper, ResponseResource } from './../../src/Form';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

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

function FormWrapperComponent(props: { successMessage: string; successMessageTimeout: number }): JSX.Element {
	const [ButtonDisabled, setButtonDisabled] = useState<boolean>(false);
	async function onSubmit(): Promise<ResponseResource> {
		return {};
	}
	return (
		<FormWrapper
			onSubmit={onSubmit}
			setButtonDisabled={setButtonDisabled}
			successMessage={props.successMessage}
			successMessageTimeout={props.successMessageTimeout}
		>
			<Button variant="primary" type="submit" disabled={ButtonDisabled}>
				送信
			</Button>
		</FormWrapper>
	);
}

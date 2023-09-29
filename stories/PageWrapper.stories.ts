import type { Meta, StoryObj } from '@storybook/react';
import PageWrapper from './../src/PageWrapper';

const meta = {
	title: 'Wrappers/PageWrapper',
	component: PageWrapper,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		title: 'ページタイトル',
		breadCrumb: [
			{
				link: '#2',
				text: 'ページ2',
			},
		],
	},
};

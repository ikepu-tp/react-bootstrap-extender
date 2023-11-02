import type { Meta, StoryObj } from '@storybook/react';
import PageWrapper, { PageWrapperProps } from './../src/PageWrapper';

const meta = {
	title: 'Wrappers/PageWrapper',
	component: PageWrapper,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: PageWrapperProps = {
	title: 'ページタイトル',
	breadCrumb: [
		{
			link: '#2',
			text: 'ページ2',
		},
	],
	changeTitle: true,
	titleSeparator: '-',
	siteTitle: 'ReactBootstrapExtender',
};
export const Normal: Story = {
	args: {
		...defaultArgs,
	},
};
export const NotChangeTitle: Story = {
	args: {
		...defaultArgs,
		changeTitle: false,
	},
};

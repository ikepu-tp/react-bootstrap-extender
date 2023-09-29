import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ListView from './../src/ListView';

const meta = {
	title: 'Wrappers/ListViews',
	component: ListView,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof ListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		getItems: async (params: { page?: number }) => {
			const page = params.page || 1;
			const items: { name: string }[] = [];
			for (let i = (page - 1) * 10 + 1; i <= page * 10; ++i) {
				items.push({
					name: `item${i}`,
				});
			}
			return {
				meta: {
					currentPage: page,
					lastPage: 5,
					length: 50,
					getLength: 10,
					per: 10,
				},
				items: items,
			};
		},
		itemWrapper: 'ul',
		itemCallback: (item, idx) => <li key={idx}>{item['name']}</li>,
	},
};

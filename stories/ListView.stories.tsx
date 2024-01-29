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
		getItems: async (params: { page?: number; per?: number }) => {
			const page = params.page || 1;
			const per = params.per || 10;
			const items: { name: string }[] = [];
			for (let i = (page - 1) * per + 1; i <= page * per; ++i) {
				items.push({
					name: `item${i}`,
				});
			}
			return {
				meta: {
					currentPage: page,
					lastPage: 5,
					length: per * 5,
					getLength: per,
					per: per,
				},
				items: items,
			};
		},
		itemWrapper: 'ul',
		itemCallback: (item, idx) => <li key={idx}>{item['name']}</li>,
		FilterProps: {
			children: 'child filter',
			except: ['keyword'],
		},
		moveToList: false,
	},
};

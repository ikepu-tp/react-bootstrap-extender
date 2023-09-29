import type { Meta, StoryObj } from '@storybook/react';
import Paginate from './../src/Paginate';
import React, { useEffect, useState } from 'react';
import { PaginationMetaResource } from '../src/ListView';

const meta = {
	title: 'Wrappers/Paginate',
	component: PaginateComponent,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PaginateComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		setPage: (page: number) => {},
		meta: {
			currentPage: 1,
			lastPage: 5,
			getLength: 10,
			length: 50,
			per: 10,
		},
	},
};

function PaginateComponent(): JSX.Element {
	const [Page, setPage] = useState<number>(1);
	const [Meta, setMeta] = useState<PaginationMetaResource>({
		currentPage: 1,
		lastPage: 5,
		getLength: 10,
		length: 50,
		per: 10,
	});

	useEffect(() => {
		Meta['currentPage'] = Page;
		setMeta({ ...{}, ...Meta });
	}, [Page]);

	return <Paginate setPage={setPage} meta={Meta} />;
}

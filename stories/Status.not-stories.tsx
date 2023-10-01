import type { Meta, StoryObj } from '@storybook/react';
import React, { PropsWithChildren, useContext, useEffect } from 'react';
import StatusWrapper from './../src/Status';
import { StatusContext } from './../src/StatusContext';

const meta = {
	title: 'Wrappers/Status',
	component: StatusChildComponent,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof StatusChildComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		title: 'title',
		body: 'body',
	},
};

function StatusComponent(props: PropsWithChildren): JSX.Element {
	return (
		<StatusWrapper.Wrapper>
			{props.children}
			<StatusWrapper.View />
		</StatusWrapper.Wrapper>
	);
}
function StatusChildComponent(props: { title?: React.ReactNode; body?: React.ReactNode }): JSX.Element {
	const Status = useContext(StatusContext);

	useEffect(() => {
		Status.changeFlush({ title: props.title, body: props.body });
	}, [props.title, props.body]);
	return (
		<StatusComponent>
			<button
				onClick={() => {
					Status.changeFlush({ body: 'test2' });
				}}
			>
				button2
			</button>
		</StatusComponent>
	);
}

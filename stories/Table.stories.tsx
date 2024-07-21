import type { Meta, StoryObj } from '@storybook/react';
import Table from './../src/Table';
import React from 'react';

const meta = {
	title: 'Components/Table',
	component: Table,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		fixedTitle: false,
		wrapperHeight: '100px',
		children: <NormalChildren />,
	},
};

function NormalChildren(): React.ReactNode {
	return (
		<>
			<thead>
				<tr>
					<th>head0</th>
					<th>head1</th>
					<th>head2</th>
					<th>head3</th>
					<th>head4</th>
					<th>head5</th>
					<th>head6</th>
					<th>head7</th>
					<th>head8</th>
					<th>head9</th>
					<th>head10</th>
					<th>head11</th>
					<th>head12</th>
					<th>head13</th>
					<th>head14</th>
					<th>head15</th>
					<th>head16</th>
					<th>head17</th>
					<th>head18</th>
					<th>head19</th>
					<th>head20</th>
				</tr>
				<tr>
					<th>2head0</th>
					<th>2head1</th>
					<th>2head2</th>
					<th>2head3</th>
					<th>2head4</th>
					<th>2head5</th>
					<th>2head6</th>
					<th>2head7</th>
					<th>2head8</th>
					<th>2head9</th>
					<th>2head10</th>
					<th>2head11</th>
					<th>2head12</th>
					<th>2head13</th>
					<th>2head14</th>
					<th>2head15</th>
					<th>2head16</th>
					<th>2head17</th>
					<th>2head18</th>
					<th>2head19</th>
					<th>2head20</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>cell0-head</th>
					<td>cell0-1</td>
					<td>cell0-2</td>
					<td>cell0-3</td>
					<td>cell0-4</td>
					<td>cell0-5</td>
					<td>cell0-6</td>
					<td>cell0-7</td>
					<td>cell0-8</td>
					<td>cell0-9</td>
					<td>cell0-10</td>
					<td>cell0-11</td>
					<td>cell0-12</td>
					<td>cell0-13</td>
					<td>cell0-14</td>
					<td>cell0-15</td>
					<td>cell0-16</td>
					<td>cell0-17</td>
					<td>cell0-18</td>
					<td>cell0-19</td>
					<td>cell0-20</td>
				</tr>
				<tr>
					<th>cell1-head</th>
					<td>cell1-1</td>
					<td>cell1-2</td>
					<td>cell1-3</td>
					<td>cell1-4</td>
					<td>cell1-5</td>
					<td>cell1-6</td>
					<td>cell1-7</td>
					<td>cell1-8</td>
					<td>cell1-9</td>
					<td>cell1-10</td>
					<td>cell1-11</td>
					<td>cell1-12</td>
					<td>cell1-13</td>
					<td>cell1-14</td>
					<td>cell1-15</td>
					<td>cell1-16</td>
					<td>cell1-17</td>
					<td>cell1-18</td>
					<td>cell1-19</td>
					<td>cell1-20</td>
				</tr>
				<tr>
					<th>cell2-head</th>
					<td>cell2-1</td>
					<td>cell2-2</td>
					<td>cell2-3</td>
					<td>cell2-4</td>
					<td>cell2-5</td>
					<td>cell2-6</td>
					<td>cell2-7</td>
					<td>cell2-8</td>
					<td>cell2-9</td>
					<td>cell2-10</td>
					<td>cell2-11</td>
					<td>cell2-12</td>
					<td>cell2-13</td>
					<td>cell2-14</td>
					<td>cell2-15</td>
					<td>cell2-16</td>
					<td>cell2-17</td>
					<td>cell2-18</td>
					<td>cell2-19</td>
					<td>cell2-20</td>
				</tr>
			</tbody>
		</>
	);
}

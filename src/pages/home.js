import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import UserIcon from '../Icons/User';
import { WrapperMain, ContentWrapper } from '../components/Wrapper/wrapper';
import { FilterWrapper } from '../components/Filter/filter';
import { ContentGrid } from '../components/ContentGrid/content';
import Header from '../components/SearchBar/header';


const options = [
	'one', 'two', 'three'
];

export default function HomePage() {
	return (
		<WrapperMain>
			{Header()}
			<ContentWrapper>
				<FilterWrapper>
					<h2>Filter</h2>
					<h3>Genre</h3>
					<Dropdown options={options} onChange={options._onSelect} value={options[0]} />
					<h3>Rating</h3>
				</FilterWrapper>
				<ContentGrid>
					<tr>
						<th>Book 1</th>
						<th>Book 2</th>
						<th>Book 3</th>
						<th>Book 4</th>
					</tr>
					<tr>
						<th>Book 1</th>
						<th>Book 2</th>
						<th>Book 3</th>
						<th>Book 4</th>
					</tr>
					<tr>
						<th>Book 1</th>
						<th>Book 2</th>
						<th>Book 3</th>
						<th>Book 4</th>
					</tr>
				</ContentGrid>

			</ContentWrapper>
		</WrapperMain>
	);
}

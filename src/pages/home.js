import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import UserIcon from '../Icons/User';
// import { WrapperMain, ContentWrapper } from '../components/Wrapper/wrapper';
import FilterWrapper from '../components/Filter/filter';
// import Header from '../components/SearchBar/header';
// import ContentData from '../components/ContentGrid/ContentData';

const options = ['one', 'two', 'three'];

export default function HomePage() {
	return (
		<FilterWrapper>
			<h2>Filter</h2>
			<h3>Genre</h3>
			<Dropdown
				options={options}
				onChange={options._onSelect}
				value={options[0]}
			/>
			<h3>Rating</h3>
		</FilterWrapper>
	);
}

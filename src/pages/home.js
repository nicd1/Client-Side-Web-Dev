import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import FilterWrapper from '../components/Filter/filter';
import ContentData from '../components/ContentGrid/ContentData';

export default function HomePage(bookData) {

	const categories = ["JavaScript","Full-stack","React","Angular","Real-time","CSS","Security"];
	const ratings = ["1", "2", "3", "4", "5"];

	return(
		<>
		<FilterWrapper>
			<h2>Filter</h2>
			<h3>Category</h3>
			<Dropdown
				options={categories}
				onChange={categories._onSelect}
				value={categories[0]}
			/>
			<h3>Rating</h3>
			<Dropdown 
				options={ratings}
				onChange={ratings._onSelect}
				value={ratings[0]}
			/>
		</FilterWrapper>
		<ContentData books={bookData}/>
		</>
	)
}

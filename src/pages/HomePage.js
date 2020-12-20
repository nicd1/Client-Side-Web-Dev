import React, { useState, useEffect } from 'react';
import 'react-dropdown/style.css';
import FilterData from '../components/Filter/FilterData';
import BookList from '../components/Books/BookList';

import { RowNavigation, Column } from "../components/Books/content";

export default function HomePage({app, bookData}) {
	const [contentLoad, setContentLoad] = useState(true);
	
	let bookViewData = bookData;

	useEffect(() => {
		if (bookData !== undefined)
			setContentLoad(false)
	}, [bookData]);

	let cbBookDataFiltered = (bookList) => {
		this.bookViewData = bookList;
	};

	return !contentLoad 
	? (
		<RowNavigation>
			<Column>
				<FilterData app={app} onFiltered={cbBookDataFiltered} />
			</Column>
			<Column>
				<BookList app={app} books={bookViewData} />
			</Column>
		</RowNavigation>
	) : (
		<RowNavigation>
			<Column>
				<FilterData app={app} />
			</Column>
			<Column>
				<h2>Loading...</h2>
			</Column>
		</RowNavigation>
	)
}
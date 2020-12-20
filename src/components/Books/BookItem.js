import React, { useState, useEffect } from 'react';
import {ECurrentPage} from '../../App';
import BookInformation from './BookInformation';

const styleNoMargin = { margin: 0 };
const styleBook = { 
	// background: "blue",
	padding: "5px 5px 10px 5px",
	boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
	transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
	cursor: "pointer"
};

export function FormatAuthors(book, concat = ",") {
	return book.authors.map( (author, i) => 
		<span key={i}> { author + (i < book.authors.length - 1 ? concat : "") } </span> )
}

function avg(numbers) {
	if (numbers === undefined || numbers == null || numbers.length === 0)
		return 0;

	var count = 0, idx = 0;
    for (idx = 0; idx < numbers.length; idx++) 
        count = count + numbers[idx];
    return Math.floor(count / numbers.length);
}

export default function BookList({app, book, onSelection}) {
	const [contentLoad, setContentLoad] = useState(true);

	useEffect(() => {
		setContentLoad(Boolean(false));
	}, [book, contentLoad]);

	let cbSelectBook = () => {
		var bookInfo = <BookInformation app={app} book={book} />;
		app.changePage( 
			bookInfo,
			ECurrentPage.E_BOOK_INFORMATION
		);
	};

	return !contentLoad ? (
		<div style={styleBook} onClick={cbSelectBook}>
			<small><i><b>{book.category}</b></i></small> <br/>
			{ book.authors.length <= 1 
			? <small> {book.authors[0]} </small>
			: <small> { FormatAuthors(book, ", ") } </small>
			} <br />
			<small><i>{ avg( book.ratings ) }</i></small>
			<hr />
            <h4 style={styleNoMargin}>{book.title}</h4>
        </div>
	) : (
		<p>Loading book...</p>
	);
}
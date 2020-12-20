import React, { useState, useEffect } from 'react';
import { Row } from './content';
import BookItem from './BookItem';


export default function BookList({app, books, onBookSelection}) {
	const [contentLoad, setContentLoad] = useState(true);

	useEffect(() => {
		setContentLoad(Boolean(false));
	}, [books, contentLoad]);

	return !contentLoad ? (
		books.length > 0 
		?  	<Row columns={4}>
				{ books.map( (book, i) => 
					<BookItem key={i} app={app} book={book} />
				)}
			</Row>
		: 	<div>
				<p> Mario, Your books are in another castle. </p>
				<p> We could not find any books, sorry. </p>
			</div>
	) : (
		<p>Loading books...</p>
	);
}

/*
<Column style={styleBook}>
	1 Book title
</Column>
<Column style={styleBook}>
	2 Book title
</Column>
<Column style={styleBook}>
	3 Book title
</Column>
<Column style={styleBook}>
	4 Book title
</Column>
<Column style={styleBook}>
	5 Book title
</Column> 
*/
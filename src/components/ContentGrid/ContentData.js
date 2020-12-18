import React, { useState, useEffect }from 'react';
import { ContentGrid, CheckBox } from './content';

export default function ContentData(books) {

	const [contentLoad, setContentLoad] = useState(true);
	if (!contentLoad){
		Object.keys(books)
	.forEach(function eachKey(id) {
		
	})
	}
	

	useEffect(() => {
		setContentLoad(Boolean(false));
	}, [books, contentLoad]);
	return !contentLoad ?(
		<ContentGrid>
					<tr>
						<th>Book 1</th><CheckBox />
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
	) :
		(
			<>
			<ContentGrid>Loading books...</ContentGrid>
			<CheckBox type='checkbox'/>
			</>
		)
}
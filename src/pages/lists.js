import React from 'react';
import { useParams } from 'react-router-dom';

export default function ListPage() {
	let { id } = useParams();

	return (
		<>
			<h1>Hello there user {id}</h1>

			<p>This is your awesome List page</p>
		</>
	);
}

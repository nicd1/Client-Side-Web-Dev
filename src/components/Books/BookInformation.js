import React, { useState, useEffect } from 'react';
import {RowNavigation} from './content'; 
import {FormatAuthors} from './BookItem';

const styleTable = { border: "1px solid #e2e2e2" };


let ElemTable = (props) =>
    <table> 
        <tbody> 
            {
                props.children.map === undefined 
                ? (<tr style={styleTable}> <td> {props.children} </td> </tr>)
                : props.children.map( (c, i) => 
                    <tr key={i} style={styleTable}> 
                        <td><span>{c}</span></td> 
                    </tr>)
            }
        </tbody> 
    </table>;

let InformationSplit = ({title, value}) => 
    <RowNavigation>
        <div><b>{title}</b></div>
        <div>{value}</div>
    </RowNavigation>;

let BookAuthorsSplit = ({book}) => 
    <InformationSplit title="" value={FormatAuthors(book, ", ")} />

let RenderReview = (review, i) => 
    <div key={i}>
        <InformationSplit title={review.reviewer} value={review.review} />
    </div>;

let RenderRating = (rating, i) => 
    <div key={i}>
    <InformationSplit title={rating} />
    </div>;



export default function BookInformation({app, book, avg}) {
	const [contentLoad, setContentLoad] = useState(true);

	useEffect(() => {
		setContentLoad(Boolean(false));
	}, [book, contentLoad]);

	return !contentLoad ? (
		<div>
			<h2>{book.title}</h2>
            <ElemTable>
                <BookAuthorsSplit book={book} />
                <InformationSplit title="Year" value={book.year} />
                <InformationSplit title="Category" value={book.category} />
                <InformationSplit title="Publisher" value={book.publisher} />
                <InformationSplit title="Description" value={book.description} />
            </ElemTable>
            <h4>Ratings</h4>
            {book.ratings.map( RenderRating )}
            <h2>Reviews</h2>
            {book.reviews.map( RenderReview )}
        </div>
	) : (
		<p>Loading book...</p>
	);
}

// Get Average: 

// var x = [1,2,3,4,5,6]
// var count = 0;
// count = 0;
// for(var i = 0; i < x.length; i++) {
//    count += x[i];
// }
// count /= x.length;
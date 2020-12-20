import React from 'react';
import Dropdown from 'react-dropdown';
import {FilterWrapper} from './Filter';

const styleNoMargin = { margin: 0 };

function avg(numbers) {
	var count = 0, idx = 0;
    for (idx = 0; idx < numbers.length; idx++) 
        count = count + numbers[idx];
    return Math.floor(count / numbers.length);
}

export default function FilterData({app, onFiltered}) {
    const categories = ["All", "JavaScript","Full-stack","React","Angular","Real-time","CSS","Security"];
	const ratings    = ["All", "1", "2", "3", "4", "5"];

    let category = app.Filter.Category;
    let rating   = app.Filter.Rating;

    let filterBooks = () => {
        let filtered = [];
        let books = app.getBooks();

        for (var idx = 0; idx < books.length; idx++) {
            var book = books[idx];
            var ratings = (avg(book.ratings)+"").valueOf();

            if (category.trim().valueOf() !== "All"
                 && rating.trim().valueOf() !== "All"
                 && book.category.trim().valueOf() === category.trim().valueOf()
                 && ratings === rating.trim().valueOf() ) {
                filtered.push(book);
            }
            else if (
                category.trim().valueOf() !== "All"
                && book.category === category.trim().valueOf()
            ) {
                filtered.push(book);
            }
            else if (
                rating.trim().valueOf() !== "All"
                && ratings === rating.trim().valueOf()
            ) {
                filtered.push(book);
            }
            else if (
                category.trim().valueOf() === "All".valueOf()
                && rating.trim().valueOf() === "All".valueOf()
            ){
                filtered.push(book);
            }
        }

        app.setBooksFiltered(filtered, category, rating);
    }

    let filterCategory = (value) => {
        category = value.value;
        filterBooks() ;
    };

    let filterRatings = (value) => {
        rating = value.value;
        filterBooks();
    };

    return (
        <FilterWrapper>
            <h2 style={styleNoMargin}>Filter</h2>
            <h3>Category</h3>
            <Dropdown
                options={categories}
                onChange={filterCategory}
                value={category} />
            <h3>Rating</h3>
            <Dropdown 
                options={ratings}
                onChange={filterRatings}
                value={rating} />
        </FilterWrapper>
    );
}

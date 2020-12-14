import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../Icons/Search';
import {
	SearchBar,
	SearchButton,
	SearchForm,
} from '../components/SearchBar/searchbar';
import Button from '../components/Button/button';

export default function Header() {

	return (
        <>
		<h1>TechReads</h1>
			<SearchForm>
				<SearchBar placeholder="Search by Title, Author or Genre..." />
				<SearchButton>
					<SearchIcon className={'search-icon'} />
				</SearchButton>
			</SearchForm>
			<Link to="/login"><Button>Log In</Button></Link>
			<Link to="/lists"><Button>My Lists</Button></Link>
            </>
	);
}

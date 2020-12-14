import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../../Icons/Search';
import {
	SearchBar,
	SearchButton,
	SearchForm,
	LinkHeader,
} from './searchbar';
import Button from '../Button/button';

export default function Header() {

	return (
        <>
		<Link to="/"><LinkHeader>TechReads</LinkHeader></Link>
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

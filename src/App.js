import React, { useState, useEffect } from 'react';
import {
	SearchBar,
	SearchButton,
	SearchForm,
	LinkHeader,
} from './components/SearchBar/searchbar';
import { WrapperMain, ContentWrapper } from './components/Wrapper/wrapper';
import Button from './components/Button/button';
import SearchIcon from './Icons/Search';
import HomePage from './pages/home';
import Login from './pages/login';
import Lists from './pages/lists';
import './App.css';

async function getAllBooks() {
	try {
	  const res = await fetch(`http://localhost:8000/books/`, {
		method: 'GET',
		header: {
		  'Content-Type': 'application/json; charset=UTF-8',
		},
	  });
	  const allBooks = await res.json();
    return allBooks;
	} catch (e) {
	  console.error(e);
	}
}

export default function App() {

	const [currentRender, setCurrentRender] = useState(HomePage());
	const [loginToggle, setLoginToggle] = useState('false');
	const [listsToggle, setListsToggle] = useState('false');
  const [homeToggle, setHomeToggle] = useState('false');
  const [books, setBooks] = useState([]);

  useEffect(() => {
		async function fetchBookData() {
		  const res = await getAllBooks();
      setBooks(res);
		}
		fetchBookData();
    }, []);
    

	const toggleLogin = () => {
		setLoginToggle(!loginToggle);
		setCurrentRender(<Login />);
	};

	const toggleLists = () => {
		setListsToggle(!listsToggle);
		setCurrentRender(<Lists />);
	};

	const toggleHome = () => {
		setHomeToggle(!homeToggle);
		setCurrentRender(<HomePage bookData={books}/>);
	};

	return (
		<WrapperMain>
			<LinkHeader>TechReads</LinkHeader>
			<SearchForm>
				<SearchBar placeholder="Search by Title, Author or Genre..." />
				<SearchButton>
					<SearchIcon className={'search-icon'} />
				</SearchButton>
			</SearchForm>
			<Button onClick={toggleHome}>Home</Button>
			<Button onClick={toggleLists}>My Lists</Button>
			<Button onClick={toggleLogin}>Log In</Button>
			<ContentWrapper>{currentRender}</ContentWrapper>
		</WrapperMain>
	);
}

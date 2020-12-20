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
import HomePage from './pages/HomePage';
import Login from './pages/Loginpage';
import Lists from './pages/ListPage';
import './App.css';

let WelcomeLoadingPage = () => <p>Loading homepage... Please wait.</p>;

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

export class ECurrentPage { 
	static E_WELCOME_LOADING = 0;
	static E_LOGIN = 1;
	static E_HOME = 2;
	static E_LIST = 3;
	static E_BOOK_INFORMATION = 4;
}

export function Application(getBooks, getBooksFiltered, setBooksFiltered, getCurrentRender, getCurrentPage, changePage, changePageEnum) {
	this.getBooks = getBooks;

	this.Filter = {Category: "All", Rating: "All", Text: "TODO"};
	this.getBooksFiltered = getBooksFiltered;
	this.setBooksFiltered = setBooksFiltered;

	this.getCurrentRender = getCurrentRender;
	this.getCurrentPage = getCurrentPage;
	this.changePage = changePage;
	this.changePageEnum = changePageEnum;
}

export default function App() {
	const [books, setBooks] = useState([]);
	const [booksFiltered, setBooksFiltered] = useState([]);

	const [currentRender, setCurrentRender] = useState(<WelcomeLoadingPage />);
	const [currentPage, setCurrentPage] = useState(ECurrentPage.E_WELCOME_LOADING);

	let application = null;
	application = new Application(
		_ => books,
		_ => booksFiltered,
		(books, category, rating) => {
			application.Filter.Category = category;
			application.Filter.Rating = rating;
			application.getBooksFiltered = _ => books;

			setBooksFiltered(books);
			setPageHome(1, books);
		},
		_ => currentRender,
		_ => currentPage,
		(pageObj, pageEnum) => {
			setCurrentPage(pageEnum);
			setCurrentRender(pageObj);
		},
		(pageEnum) => {
			switch(pageEnum) {
				default:
				case ECurrentPage.E_WELCOME_LOADING: 
					setCurrentPage(pageEnum);
					setCurrentRender(<WelcomeLoadingPage />);
					break;
				case ECurrentPage.E_LOGIN: setPageLogin(); break;
				case ECurrentPage.E_HOME:  setPageHome(); break;
				case ECurrentPage.E_LIST:  setPageLists(); break;
			}
		},
	);

	useEffect(() => {
		async function fetchBookData() {
			const res = await getAllBooks();
			setBooks(res);

			application.getBooks = _ => res;
			
			// Check if we are the loading page then load the homepage
			// or we are in the homepage, we want to refresh the page.
			if (currentPage === ECurrentPage.E_HOME || currentPage === ECurrentPage.E_WELCOME_LOADING) { 
				// Update home
				setPageHome(1, res);
			}
		}

		fetchBookData();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const setPageLogin = () => {
		setCurrentPage(ECurrentPage.E_LOGIN);
		setCurrentRender(<Login />);
	};

	const setPageLists = () => {
		setCurrentPage(ECurrentPage.E_LISTS);
		setCurrentRender(<Lists />);
	};

	function setPageHome() {
		var currentBooksVar = booksFiltered;
		if (arguments.length > 1 && arguments[0] === 1)
			currentBooksVar = arguments[1];

		setCurrentPage(ECurrentPage.E_HOME);
		setCurrentRender(<HomePage app={application} bookData={currentBooksVar} />);
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
			<Button onClick={setPageHome}>Home</Button>
			<Button onClick={setPageLists}>My Lists</Button>
			<Button onClick={setPageLogin}>Log In</Button>
			<ContentWrapper>{currentRender}</ContentWrapper>
		</WrapperMain>
	);
}

import { React, useState } from 'react';
import SearchIcon from '../Icons/Search';
import { SearchBar, SearchButton, SearchForm, LinkHeader } from '../components/SearchBar/searchbar';
import { WrapperMain, ContentWrapper } from '../components/Wrapper/wrapper';
import Button from '../components/Button/button';
import HomePage from './home';
import Login from './login';
import Lists from './lists';

export default function Header() {
	const [currentRender, setCurrentRender] = useState(HomePage());
	const [loginToggle, setLoginToggle] = useState('false');
	const [listsToggle, setListsToggle] = useState('false');
	const [homeToggle, setHomeToggle] = useState('false');

	const toggleLogin = () => {
		setLoginToggle(!loginToggle);
		setCurrentRender(Login());
	};

	const toggleLists = () => {
		setListsToggle(!listsToggle);
		setCurrentRender(Lists());
	};

	const toggleHome = () => {
		setHomeToggle(!homeToggle);
		setCurrentRender(HomePage());
	};

	return (
		<WrapperMain>
			{/* <Link to="/"> */}
				<LinkHeader onClick={toggleHome}>TechReads</LinkHeader>
			{/* </Link> */}
			<SearchForm>
				<SearchBar placeholder="Search by Title, Author or Genre..." />
				<SearchButton>
					<SearchIcon className={'search-icon'} />
				</SearchButton>
			</SearchForm>

			{/* <Link to="/login"> */}
				<Button onClick={toggleLogin}>Log In</Button>
			{/* </Link> */}
			{/* <Link to="/lists"> */}
				<Button onClick={toggleLists}>My Lists</Button>
			{/* </Link> */}
			<ContentWrapper>{currentRender}</ContentWrapper>
		</WrapperMain>
	);
}

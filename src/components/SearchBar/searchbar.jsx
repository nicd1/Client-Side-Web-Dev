import styled from 'styled-components';

const SearchForm = styled.form`

`;

const LinkHeader = styled.h1`
    cursor: pointer;
    color: #242424;
    text-decoration: none;
`;

const SearchBar = styled.input`
    font-size: 16px;
    padding: 10px;
    padding-left: 20px;
    border: none;
    width: 50%;
    margin-left: 25%;
    margin-right: auto;
    margin-bottom: 45px;
    background-color: #4f3745;
    border-radius: 10rem;
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.281);
    color: whitesmoke;

    &focus,
    &active {
        border-color: pink;
        border-width: 2px;
    }
    &::placeholder {
        color: #a3a3a3;
    }
`;

const SearchButton = styled.button`
    font-size: 16px;
    padding-left: 15px;
    background-color: whitesmoke;
    padding-right: 15px;
    cursor: pointer;
    border: transparent;
    color: #242424;

    &:hover {
        color: #5f4956;
    }

    .search-icon{
        width: 50px;
        height: 30px; 
    }

`;

export {
    SearchBar,
    SearchButton,
    SearchForm,
    LinkHeader,
}
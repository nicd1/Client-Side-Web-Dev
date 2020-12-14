import styled from 'styled-components';

const FilterWrapper = styled.div`
    width: 300px;
    height: 400px;
    font-size: 14px;
    margin: 25px, 30px, 25px, 30px;
    padding: 20px;
    border: 1px solid #e2e2e2;
    background-color: transparent;
    outline: none;
    color: #121212;
    float: left;
    grid-column: 1 / 1;

    h2 {
        font-style: italic;
    }
`;

export {
    FilterWrapper,
}
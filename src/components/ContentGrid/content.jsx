import styled from 'styled-components';

const ContentGrid = styled.table`
    margin-left: 450px;
    width: 100%;
    float: right;
    border: none;
    text-align: center;

    th {
        padding: 15px 100px 75px
    }
`;

const CheckBox = styled.input`
    display: inline-block;
    width: 20px;
    height: 20px;
`;
export {
    ContentGrid,
    CheckBox,
}
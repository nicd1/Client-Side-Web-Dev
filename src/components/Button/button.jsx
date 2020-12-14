import styled from 'styled-components';

const Button = styled.button`
    background-color: whitesmoke;
    padding: 5px 15px 5px; 
    border-right: 1px solid #e2e2e2;
    text-align: center;
    display: inline-block;
    font-size: 15px;
    border-left: none;
    border-top: none;
    border-bottom: none;
    cursor: pointer;
    height: 36px;

    &:hover{
        color: white;
        background-color: #5f4956;
    }

    .user-icon {
        height: 20px;
        width: 20px;
        padding-right: 4px;
    }
`;

export default Button;
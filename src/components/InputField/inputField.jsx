import styled from 'styled-components';

const InputField = styled.input`
    width: 60%;
    height: 35px;
`;

const UserForm = styled.form`
p {
    font-size: 15px;
}

button {
    background-color: whitesmoke;
    padding: 5px 15px 5px;
    text-align: center;
    display: inline-block;
    font-size: 15px; 
    align-self: center;
    margin-top: 25px;
    margin-bottom: 20px;
    cursor: pointer;
    height: 36px;
    border: 1px solid #969696;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.281);

    &:hover{
        color: white;
        background-color: #5f4956;
    }
}
`;

export {
    InputField,
    UserForm,
}
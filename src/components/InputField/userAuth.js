import React from 'react';
import { InputField, UserForm } from './inputField';
import { Subhead } from '../Wrapper/wrapper';
import HomePage from '../../pages/home';

function CreateAccount() {

	return (
        <>
		<Subhead>Create an Account</Subhead>
        <UserForm>
            <p>Email Address</p> <InputField type='text' placeholder='example@example.com' />
            <p>Username</p><InputField type='text'/>
            <p>Password</p><InputField type='password'/>
            <br />
            <button>Create Account</button>
        </UserForm>
            </>
	);
}

function Login() {

    return (
        <>
		<Subhead>Log In</Subhead>
        <UserForm>
            <p>Username</p><InputField type='text' required />
            <p>Password</p><InputField type='password' required />
            <br />
            <button onClick={HomePage()}>Log In</button>
        </UserForm>
            </>
	);
}

export {
    CreateAccount,
    Login,
}
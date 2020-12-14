import React from 'react';
import { Link } from 'react-router-dom';
import { InputField, UserForm } from './inputField';
import { Subhead } from '../Wrapper/wrapper';

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
            <Link to="/"><button>Log In</button></Link>
        </UserForm>
            </>
	);
}

export {
    CreateAccount,
    Login,
}
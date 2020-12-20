import React from 'react';
import { ContainerWrapper } from '../components/Wrapper/wrapper';
// import Header from './header';
import { CreateAccount, Login } from '../components/InputField/UserAuth';

export default function LoginPage() {
	return (
                <ContainerWrapper colSpan="2">
                    <tr>
                        <th>{CreateAccount()}</th>
                        <th>{Login()}</th>
                    </tr>
                </ContainerWrapper>
	);
}

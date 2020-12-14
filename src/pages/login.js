import React from 'react';
import { WrapperMain, ContentWrapper, ContainerWrapper } from '../components/Wrapper/wrapper';
import Header from '../components/SearchBar/header';
import { CreateAccount, Login } from '../components/InputField/userAuth';

export default function LoginPage() {
	return (
        <WrapperMain>
            {Header()}
            <ContentWrapper>
                <ContainerWrapper colSpan="2">
                    <tr>
                        <th>{CreateAccount()}</th>
                        <th>{Login()}</th>
                    </tr>
                </ContainerWrapper>
            </ContentWrapper>
        </WrapperMain>
	);
}

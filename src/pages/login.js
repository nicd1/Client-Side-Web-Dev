import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperMain, ContentWrapper, ContainerWrapper } from '../components/Wrapper/wrapper';
import Header from './header';

export default function LoginPage() {
	return (
        <WrapperMain>
            {Header()}
            <ContentWrapper>
                <ContainerWrapper>
                    test
                </ContainerWrapper>
            </ContentWrapper>
            
                {/* <Link to='/'>Link to home</Link> */}
            
        </WrapperMain>
	);
}

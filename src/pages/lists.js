import React from 'react';
import { WrapperMain, ContentWrapper } from '../components/Wrapper/wrapper';
import Header from '../components/SearchBar/header';
import ContentTable from '../components/ContentTable/contentTable';
import Table from '../components/ContentTable/contentTable.js';
import NavBar from '../components/NavBar/listBar';

export default function ListPage() {

	return (
		<WrapperMain>
		{Header()}
		<ContentWrapper>
			{NavBar()}
			<ContentTable>
				{Table()}
			</ContentTable>
		</ContentWrapper>
		</WrapperMain>
	);
}

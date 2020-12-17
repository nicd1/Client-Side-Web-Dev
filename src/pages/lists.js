import React from 'react';
// import { WrapperMain, ContentWrapper } from '../components/Wrapper/wrapper';
// import Header from './header';
import ContentTable from '../components/ContentTable/contentTable';
import Table from '../components/ContentTable/contentTable.js';
// import NavBar from '../components/NavBar/listBar';

export default function ListPage() {

	return (
			<ContentTable>
				{Table()}
			</ContentTable>
	);
}

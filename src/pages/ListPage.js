import React from 'react';
// import { WrapperMain, ContentWrapper } from '../components/Wrapper/wrapper';
// import Header from './header';
import ContentTable from '../components/ContentTable/ContentTable';
import Table from '../components/ContentTable/ContentTable.js';
// import NavBar from '../components/NavBar/listBar';

export default function ListPage() {

	return (
		<div>
			<ContentTable>
				{Table()}
			</ContentTable>
		</div>
		
	);
}

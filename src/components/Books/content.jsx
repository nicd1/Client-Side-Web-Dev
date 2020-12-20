import styled from 'styled-components';

const ContentGrid = styled.table`
	tbody {
		margin-left: 450px;
		width: 100%;
		float: right;
		border: none;
		text-align: center;
	}

	th {
		padding: 15px 100px 75px;
	}
`;

const CheckBox = styled.input`
	display: inline-block;
	width: 20px;
	height: 20px;
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: 
		repeat(${(props) => 
			(props === undefined || props.columns === undefined)
		    ? 1
			: props.columns}, 1fr);
	/* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
	grid-gap: 10px;
`;

const RowNavigation = styled.div`
	display: grid;
	grid-template-columns: 
		minmax(100px, 150px)
		repeat(${(props) => 
			(props === undefined || props.columns === undefined)
		    ? 1
			: props.columns - 1}, 1fr);
	/* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
	grid-gap: 10px;
`;

const Column = styled.div`
	/* flex: ${(props) => props.size}; */
	/* flex-grow: 1; */
`;

export { 
	ContentGrid, CheckBox, 
	Row, RowNavigation, Column 
};
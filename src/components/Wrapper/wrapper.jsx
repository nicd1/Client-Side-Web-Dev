import styled from 'styled-components';

const WrapperMain = styled.div`
	margin: 15px, 30px, 15px, 30px;
	padding: 5px;
	color: #242424;

	h1 {
		text-align: center;
		margin-left: 15%;
		margin-right: 15%;
		font-size: 40px;
	}
`;

const ContentWrapper = styled.div`
    margin: 25px, 30px, 25px, 30px;
	padding: 20px;
	border-top: 1px solid #e2e2e2;
    //display: inline-grid;
    //grid-template-columns: 12px 12px;
    //grid-template-rows: 12px 12px;
    /* justify-items: start; */
`;

const ContainerWrapper = styled.table`
	margin: auto;
	margin-left: 500px;
	margin-top: 100px;
	align-self: center;
	width: 900px;
	height: 300px;
	text-align: center;
	border-collapse: collapse;

	th {
		border: 1px solid #e2e2e2;
		width: 50%;
		font-size: 18px;
	}
`;

const Subhead = styled.h3`
	font-size: 18px;
	text-align: center;
`;

export { WrapperMain, ContentWrapper, ContainerWrapper, Subhead };

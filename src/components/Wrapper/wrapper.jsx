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
    width: 100%;
	padding: 20px;
	border-top: 1px solid #e2e2e2;
    display: inline-grid;
    grid-template-columns: 12px 12px;
    grid-template-rows: 12px 12px;
    justify-items: start;
`;

const ContainerWrapper = styled.div`
	margin: auto;
	margin-top: 40px;
	align-self: center;
	border: 1px solid #e2e2e2;
	width: 900px;
	height: 300px;
`;

export { WrapperMain, ContentWrapper, ContainerWrapper };

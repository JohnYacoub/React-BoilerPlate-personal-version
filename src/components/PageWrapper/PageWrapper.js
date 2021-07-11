import styled from 'styled-components';

const Wrapper = styled.div`
	color: #757575;
	font-size: clamp(100%, 1rem + 0.25vw, 2rem);
	display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh; //don't forget to remove it
`;
export default function PageWrapper({ children, ...rest }) {
	return <Wrapper {...rest}>{children}</Wrapper>;
}

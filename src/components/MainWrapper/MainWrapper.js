import styled from 'styled-components';

const Wrapper = styled.main`
	display: grid;
	grid-template-columns: auto min(80ch, calc(100vw - 1rem)) auto;
	row-gap: 5rem; //to be global later
	overflow-x: hidden;
	> * {
		grid-column: 2;
		padding: 0 1rem;
	}
`;

export default function MainWrapper({ children, ...rest }) {
	return <Wrapper {...rest}>{children}</Wrapper>;
}

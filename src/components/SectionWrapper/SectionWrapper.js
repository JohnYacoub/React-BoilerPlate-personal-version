import styled from 'styled-components';

const Wrapper = styled.section`
	display: grid;
	gap: 1rem;
	justify-items: center;
	max-width: 1280px;
	margin: 0 auto;
	width: 100%;
`;

export default function SectionWrapper({ children, ...rest }) {
	return <Wrapper {...rest}>{children}</Wrapper>;
}

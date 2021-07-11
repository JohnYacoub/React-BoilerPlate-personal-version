import React from 'react';
import styled from 'styled-components';
const Footer = () => {
	const Wrapper = styled.div`
		max-width: min(80ch, calc(100vw - 1rem));
		padding: 1rem;
		margin: 0 auto;
	`;

	return (
		<footer>
			<Wrapper>
				<h1>Footer</h1>
			</Wrapper>
		</footer>
	);
};

export default Footer;

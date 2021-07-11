import React from 'react';
import styled from 'styled-components';
const Nav = () => {
	const Wrapper = styled.div`
		max-width: min(80ch, calc(100vw - 1rem));
		padding: 1rem;
		margin: 0 auto;
	`;
	return (
		<header>
			<Wrapper>
				<h1>Nav</h1>
			</Wrapper>
		</header>
	);
};

export default Nav;

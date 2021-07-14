import React from 'react';
import styled from 'styled-components';
import { COLORS, SHADOWS } from '../../constants';
const Nav = () => {
	const Header = styled.header`
		position: sticky;
		top: 0;
		background-color: ${COLORS.nav};
		border-bottom: 1px solid ${COLORS.secondary};
		box-shadow: ${SHADOWS.medium};
	`;

	const Wrapper = styled.div`
		max-width: min(80ch, calc(100vw - 1rem));
		padding: 1rem;
		margin: 0 auto;
		display: grid;
		align-items: center;
		grid-template-rows: 1fr 1fr;
	`;
	return (
		<Header>
			<Wrapper>
				<div style={{ gridArea: '1 / 1 / 2 / -1' }}>
					<h2>Logo</h2>
				</div>
				<div style={{ gridArea: '1 / 1 / 2 / -1', justifySelf: 'end' }}>
					Links
				</div>
			</Wrapper>
		</Header>
	);
};

export default Nav;

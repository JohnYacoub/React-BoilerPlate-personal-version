import React from 'react';
import styled from 'styled-components';
const Nav = () => {
	const Wrapper = styled.div`
		max-width: min(80ch, calc(100vw - 1rem));
		padding: 1rem;
		margin: 0 auto;
		display: grid;
		align-items: center;
		grid-template-rows: 1fr 1fr;
	`;
	return (
		<header
			style={{
				position: 'sticky',
				top: 0,
				backgroundColor: '#f4f7fe',
				borderBottom: ' 1px solid #f4f7fe',
				boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.25)',
			}}
		>
			<Wrapper>
				<div style={{ gridArea: '1 / 1 / 2 / -1' }}>
					<h2>Logo</h2>
				</div>
				<div style={{ gridArea: '1 / 1 / 2 / -1', justifySelf: 'end' }}>
					Links
				</div>
			</Wrapper>
		</header>
	);
};

export default Nav;

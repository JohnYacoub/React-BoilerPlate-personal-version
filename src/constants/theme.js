export const COLORS = {
	primary: 'hsl(212,47%,42%)',
	secondary: 'hsl(211,174%,132%)',
	footer: 'hsl(0,0,15%)',
	nav: 'hsl(204,5%,82%)',
};

export const SIZES = {
	base: {
		maxWidth: '1280px',
		centerColumn: 'min(80ch,calc(100vw 1 1rem))',
		rowGap: '5rem',
		gap: '1rem',
	},
	raduis: 10,
	padding: {
		small: '.5rem',
		medium: '1rem',
		large: '1.5rem',
		xLarge: '2rem',
	},
	margin: {
		small: '.5rem',
		medium: '1rem',
		large: '1.5rem',
		xLarge: '2rem',
	},
	text: {
		small: '.64rem',
		medium: '.8rem',
		large: '1rem',
		xLarge: '1.25rem',
	},
	Heading: {
		small: '1.563rem',
		medium: '1.953rem',
		large: '2.441rem',
		xLarge: '3.052rem',
	},
};

export const SHADOWS = {
	small: '0px 4px 6px -1px rgba(0, 0, 0, 0.25)',
	medium: '0px 10px 15px -3px rgba(0, 0, 0, 0.25)',
	large:
		'0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

const appTheme = { COLORS, SIZES, SHADOWS };

export default appTheme;

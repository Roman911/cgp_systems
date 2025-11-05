import type { SVGProps } from 'react';

const TextAlign = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="25px"
		height="25px"
		fill="none"
		viewBox="0 0 25 25"
		{ ...props }
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.6666 17.7083V19.7917H2.08331V17.7083H16.6666ZM22.9166 13.5417V15.625H2.08331V13.5417H22.9166ZM16.6666 9.37501V11.4583H2.08331V9.37501H16.6666ZM22.9166 5.20834V7.29168H2.08331V5.20834H22.9166Z"
			fill="currentColor"
		/>
	</svg>
);

export default TextAlign;

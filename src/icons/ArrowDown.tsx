import type { SVGProps } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="21px"
		height="21px"
		fill="none"
		viewBox="0 0 21 21"
		{ ...props }
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.875 14.6162V4.24999H11.125V14.6162L15.0581 10.6831L15.9419 11.5669L10.5 17.0087L5.05813 11.5669L5.94188 10.6831L9.875 14.6162Z"
			fill="currentColor"
		/>
	</svg>
);

export default ArrowDown;

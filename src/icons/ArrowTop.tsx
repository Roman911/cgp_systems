import type { SVGProps } from 'react';

const ArrowTop = (props: SVGProps<SVGSVGElement>) => (
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
			d="M11.125 6.38376V16.75H9.875V6.38376L5.94187 10.3169L5.05812 9.43313L10.5 3.99126L15.9419 9.43313L15.0581 10.3169L11.125 6.38376Z"
			fill="currentColor"
		/>
	</svg>
);

export default ArrowTop;

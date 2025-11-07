import type { SVGProps } from 'react';

const Headline = (props: SVGProps<SVGSVGElement>) => (
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
			d="M4.16665 2.08334H20.8333C21.9839 2.08334 22.9166 3.01608 22.9166 4.16668V8.33334C22.9166 9.48394 21.9839 10.4167 20.8333 10.4167H4.16665C3.01605 10.4167 2.08331 9.48394 2.08331 8.33334V4.16668C2.08331 3.01608 3.01605 2.08334 4.16665 2.08334ZM4.16665 4.16668V8.33334H20.8333V4.16668H4.16665ZM22.9166 16.6667V18.75H2.08331V16.6667H22.9166ZM22.9166 20.8333V22.9167H2.08331V20.8333H22.9166Z"
			fill='currentColor'
		/>
		<path
			d="M22.9166 18.75V16.6667H2.08331V18.75H22.9166Z"
			fill='currentColor'
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22.9166 12.5V14.5833H2.08331V12.5H22.9166Z"
			fill='currentColor'
		/>
	</svg>
);

export default Headline;

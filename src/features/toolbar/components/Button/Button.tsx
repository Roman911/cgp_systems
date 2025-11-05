import type { FC, ReactNode } from 'react';
import * as Icons from '../../../../components/icons';

const icons = {
	headline: Icons.Headline,
	image: Icons.Image,
	paragraph: Icons.TextAlign,
};

interface ButtonProps {
	children: ReactNode
	icon: keyof typeof icons
}

const Button: FC<ButtonProps> = ({ icon, children }) => {
	const Icon = icons[icon];

	return (
		<button
			className='bg-blue-100 flex flex-col items-center gap-3 pt-3 pb-4.5 px-4 text-xs rounded-md'
		>
			<Icon className='text-blue-300'/>
			{ children }
		</button>
	)
};

export default Button;

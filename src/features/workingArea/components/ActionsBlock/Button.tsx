import type { FC } from 'react';
import * as Icons from '../../../../icons';
import { twMerge } from 'tailwind-merge';

const icons = {
	arrowDown: Icons.ArrowDown,
	arrowTop: Icons.ArrowTop,
	basket: Icons.Basket,
	clone: Icons.Clone,
};

interface ButtonProps {
	icon: keyof typeof icons
	isArrow?: boolean
	handleClick: () => void
}

const Button: FC<ButtonProps> = ({ icon, isArrow, handleClick }) => {
	const Icon = icons[icon];

	return (
		<button
			onClick={ handleClick }
			className='text-white cursor-pointer group/action'
		>
			<Icon
				className={ twMerge('rounded-xs group-hover/action:bg-cyan-600', isArrow && 'group-hover/action:bg-blue-600') }
			/>
		</button>
	)
};

export default Button;

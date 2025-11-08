import { type FC, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import * as Icons from '../../../../icons';

const icons = {
	arrowDown: Icons.ArrowDown,
	arrowTop: Icons.ArrowTop,
	basket: Icons.Basket,
	clone: Icons.Clone,
};

interface ButtonProps {
	icon: keyof typeof icons;
	isArrow?: boolean;
	onClick: () => void;
	className?: string;
}

const Button: FC<ButtonProps> = memo(({ icon, isArrow, onClick, className }) => {
	const Icon = icons[icon];

	return (
		<button
			type="button"
			onClick={ onClick }
			className={ twMerge(
				'flex items-center justify-center cursor-pointer text-white transition-colors duration-150 group/action',
				className
			) }
			aria-label={ icon }
		>
			<Icon
				className={ twMerge(
					'rounded-xs transition-colors duration-150 group-hover/action:bg-cyan-500',
					isArrow && 'group-hover/action:bg-blue-600'
				) }
			/>
		</button>
	);
});

Button.displayName = 'Button';

export default Button;

import { type FC, memo, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
	color?: 'primary' | 'secondary'
	children: ReactNode
	className?: string
	disabled?: boolean
	onClick?: () => void
}

const Button: FC<ButtonProps> = ({ color = 'primary', children, className, disabled, onClick }) => {
	return (
		<button
			type="button"
			disabled={ disabled }
			onClick={ onClick }
			className={ twMerge(
				'h-10 min-w-36 rounded-sm font-medium text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/60 disabled:opacity-60 disabled:cursor-not-allowed',
				color === 'primary'
					? 'bg-primary hover:opacity-95'
					: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
				className
			) }
		>
			{ children }
		</button>
	);
};

export default memo(Button);

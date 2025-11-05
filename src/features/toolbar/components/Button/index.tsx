import type { FC, ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
	return (
		<div>{ children }</div>
	)
};

export default Button;

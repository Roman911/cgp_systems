import type { FC, ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className='py-7 px-11 flex flex-col gap-8'>
			{ children }
		</div>
	)
};

export default Layout;

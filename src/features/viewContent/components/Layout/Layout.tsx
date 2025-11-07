import type { FC, ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className='p-2 flex flex-col gap-4'>
			{ children }
		</div>
	)
};

export default Layout;

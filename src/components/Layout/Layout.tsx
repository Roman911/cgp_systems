import type { FC, ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
	children: ReactNode
}

const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
	return <>
		<Header />
		<main className='container mx-auto max-w-[1420px] px-4 min-h-screen grid grid-cols-[270px_auto_auto]'>
			{ children }
		</main>
	</>
};

export default LayoutWrapper;

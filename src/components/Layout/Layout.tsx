import type { FC, ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
	children: ReactNode
}

const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
	return <>
		<Header />
		<main className='container mx-auto max-w-[1440px] min-h-screen grid grid-cols-[270px_auto_632px]'>
			{ children }
		</main>
	</>
};

export default LayoutWrapper;

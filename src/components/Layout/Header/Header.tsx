import Logo from './Logo.tsx';

const Header = () => {
	return (
		<header className='h-16 border-b border-gray-300 flex items-center'>
			<div className='container mx-auto max-w-[1420px] px-4'>
				<Logo />
			</div>
		</header>
	)
};

export default Header;

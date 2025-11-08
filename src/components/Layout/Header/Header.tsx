import Logo from './Logo.tsx';

const Header = () => {
	return (
		<header className='h-[70px] border-b border-gray-300 flex items-center'>
			<div className='container mx-auto max-w-[1440px] px-8'>
				<Logo />
			</div>
		</header>
	)
};

export default Header;

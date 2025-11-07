const NoResultBlock = ({ text }: { text: string }) => {
	return (
		<div className='m-2 p-4 w-11/12 mx-auto text-center bg-blue-100 rounded-xs'>
			{ text }
		</div>
	)
};

export default NoResultBlock;

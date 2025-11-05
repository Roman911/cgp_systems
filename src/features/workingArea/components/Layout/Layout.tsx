import { BlocStatus } from '../../../../types/blocs';
import { BlocSection } from '../../../../components';
import { Bloc } from '../Bloc';

const Layout = () => {
	return (
		<BlocSection
			isWorkingArea
			status={ BlocStatus.WorkingArea }
			className='bg-gray-100'
			renderItem={ bloc => (
				<Bloc key={ bloc.id } id={ bloc.id } icon={ bloc.icon }>
					{ bloc.title }
				</Bloc>
			)}
		/>
	);
};

export default Layout;
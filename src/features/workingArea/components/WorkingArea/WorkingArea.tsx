import { BlocStatus } from '../../../../types/blocs';
import { BlocSection } from '../../../Bloc';
import { Bloc } from '../Bloc';

const WorkingArea = () => {
	return (
		<BlocSection
			isWorkingArea
			status={ BlocStatus.WorkingArea }
			className='bg-gray-100'
			renderItem={ bloc => (
				<Bloc key={ bloc.id } id={ bloc.id } icon={ bloc.icon } image={ bloc.src }>
					{ bloc.title }
				</Bloc>
			)}
		/>
	);
};

export default WorkingArea;

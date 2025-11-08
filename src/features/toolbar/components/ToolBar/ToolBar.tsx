import { Bloc } from '../Bloc';
import { BlocStatus } from '../../../../types/blocs';
import { BlocSection } from '../../../Bloc';

const ToolBar = () => {
	return (
		<BlocSection
			status={ BlocStatus.Toolbar }
			renderItem={ bloc => (
				<Bloc key={ bloc.id } id={ bloc.id } icon={ bloc.icon }>
					{ bloc.title }
				</Bloc>
			)}
		/>
	);
};

export default ToolBar;

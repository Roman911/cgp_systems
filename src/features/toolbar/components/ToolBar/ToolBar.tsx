import { Button } from '../';
import { BlocStatus } from '../../../../types/blocs';
import { BlocSection } from '../../../../components';

const ToolBar = () => {
	return (
		<BlocSection
			status={ BlocStatus.Toolbar }
			renderItem={ bloc => (
				<Button key={ bloc.id } id={ bloc.id } icon={ bloc.icon }>
					{ bloc.title }
				</Button>
			)}
		/>
	);
};

export default ToolBar;

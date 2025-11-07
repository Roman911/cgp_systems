import { Layout } from '../Layout';
import { useLocalStorageSync } from '../../hooks/useLocalStorageSync.ts';
import { filterByStatus } from '../../../../utils/filterByStatus.ts';
import { BlocStatus } from '../../../../types/blocs.ts';
import { NoResultBlock } from '../../../../components';

const ViewContent = () => {
	const blocs = useLocalStorageSync('blocs', []);
	const workingBlocs = filterByStatus(blocs, BlocStatus.WorkingArea);

	return (
		<Layout>
			{ workingBlocs.length === 0 ? <NoResultBlock text='no result' /> : workingBlocs.map(block => {
				return <div key={ block.id }>123</div>
			}) }
		</Layout>
	);
};

export default ViewContent;
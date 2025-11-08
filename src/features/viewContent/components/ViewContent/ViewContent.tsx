import { Layout } from '../Layout';
import { useLocalStorageSync } from '../../hooks/useLocalStorageSync.ts';
import { filterByStatus } from '../../../../utils/filterByStatus.ts';
import { BlocStatus } from '../../../../types/blocs.ts';
import { NoResultBlock } from '../../../../components';
import Item from './Item.tsx';

const ViewContent = () => {
	const blocs = useLocalStorageSync('blocs', []);
	const workingBlocs = filterByStatus(blocs, BlocStatus.WorkingArea);

	return (
		<Layout>
			{ workingBlocs.length === 0 ? <NoResultBlock text='no result' /> : workingBlocs.map(item => {
				return <Item key={ item.id } item={ item } />
			}) }
		</Layout>
	);
};

export default ViewContent;
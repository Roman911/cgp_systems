import type { FC, ReactNode } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import { addBloc } from '../../../../store/reducers/blocsSlice';
import { BlocLayout } from '../../../../components';
import * as Icon from '../../../../icons';
import { type Icons } from '../../../../types/blocs';

interface ButtonProps {
	children: ReactNode
	id: string
	icon: Icons
}

const Bloc: FC<ButtonProps> = ({ id, icon, children }) => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(addBloc(id));
	}

	return (
		<BlocLayout isToolbar id={ id } icon={ icon } handleClick={ handleClick }>
			{ children }
			<Icon.Plus className='absolute top-0 right-0 fill-blue-400 hidden group-hover:block' />
		</BlocLayout>
	)
};

export default Bloc;

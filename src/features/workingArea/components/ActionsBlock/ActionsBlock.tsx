import type { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';
import { addBloc, removeBloc, setBlocs } from '../../../../store/reducers/blocsSlice.ts';
import Button from './Button.tsx';
import { twMerge } from 'tailwind-merge';
import { moveItem } from '../../utils/moveItem.ts';
import { BlocStatus } from '../../../../types/blocs.ts';
import { filterByStatus } from '../../../../utils/filterByStatus.ts';

interface ActionsBlockProps {
	id: string
	isActive: boolean
}

const ActionsBlock: FC<ActionsBlockProps> = ({ id, isActive }) => {
	const dispatch = useAppDispatch();
	const { blocs } = useAppSelector(state => state.blocsReducer);
	const workingBlocs = filterByStatus(blocs, BlocStatus.WorkingArea);

	const onCloneBlock = () => {
		dispatch(addBloc(id));
	}

	const onRemoveBloc = () => {
		dispatch(removeBloc(id));
	}

	const moveBloc = (action: number) => {
		const index = workingBlocs.findIndex(item => item.id === id);
		const newBlocs = moveItem(workingBlocs, index, index + action);
		dispatch(setBlocs(newBlocs));
	}

	return (
		<div className={ twMerge('absolute -top-8 right-0 gap-1 hidden z-10', isActive && 'flex') }>
			<div className='bg-blue-500 rounded-t-sm p-1'>
				<Button isArrow icon='arrowDown' handleClick={ () => moveBloc(1) } />
				<Button isArrow icon='arrowTop' handleClick={ () => moveBloc(-1) } />
			</div>
			<div className='bg-cyan-400 rounded-t-sm p-1'>
				<Button icon='clone' handleClick={ onCloneBlock } />
				<Button icon='basket' handleClick={ onRemoveBloc } />
			</div>
		</div>
	)
};

export default ActionsBlock;

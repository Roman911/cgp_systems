import { type FC, type ReactNode, useCallback } from 'react';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addBloc, removeBloc } from '../../../store/reducers/blocsSlice';
import { type Bloc, BlocStatus } from '../../../types/blocs';

interface DndWrapperProps {
	children: ReactNode
}

const DndWrapper: FC<DndWrapperProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const { blocs } = useAppSelector(state => state.blocsReducer);

	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event;

		if(!over) return;

		const blocId = active.id as string;
		const newStatus = over.id as Bloc['status'];
		const activeBloc = blocs.find(i => i.id === blocId);

		if (!activeBloc) return;

		if (newStatus !== activeBloc.status) {
			if (newStatus === BlocStatus.WorkingArea) {
				dispatch(addBloc(blocId));
			} else {
				dispatch(removeBloc(activeBloc.id));
			}
		}
	}, [ blocs, dispatch ]);

	return (
		<DndContext onDragEnd={ handleDragEnd }>
			{ children }
		</DndContext>
	)
};

export default DndWrapper;

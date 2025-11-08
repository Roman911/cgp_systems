import { type FC, type ReactNode, useCallback } from 'react';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addBloc, removeBloc } from '../../../store/reducers/blocsSlice';
import { type Bloc, BlocStatus } from '../../../types/blocs';

interface DndWrapperProps {
	children: ReactNode;
}

const DndWrapper: FC<DndWrapperProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const blocs = useAppSelector(state => state.blocsReducer.blocs);

	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event;
		if(!over) return;

		const blocId = String(active.id);
		const newStatus = over.id as Bloc['status'];
		const activeBloc = blocs.find((b: { id: string; }) => b.id === blocId);

		if (!activeBloc || newStatus === activeBloc.status) return;

		// Handle move between zones
		if (newStatus === BlocStatus.WorkingArea) {
			dispatch(addBloc(blocId));
		} else {
			dispatch(removeBloc(activeBloc.id));
		}
	}, [ blocs, dispatch ]);

	return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};

export default DndWrapper;

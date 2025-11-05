import { type FC, type ReactNode, useCallback } from 'react';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setBlocs } from '../../../store/reducers/blocsSlice';
import type { Bloc } from '../../../types/blocs';

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

		dispatch(setBlocs(blocs.map((bloc) =>
			bloc.id === blocId
				? {
					...bloc,
					status: newStatus,
				}
				: bloc,
		)));
	}, [ blocs, dispatch ]);

	return (
		<DndContext onDragEnd={ handleDragEnd }>
			{ children }
		</DndContext>
	)
};

export default DndWrapper;

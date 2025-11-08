import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addBloc, removeBloc, setBlocs } from '../../../store/reducers/blocsSlice';
import { BlocStatus } from '../../../types/blocs';
import { filterByStatus } from '../../../utils/filterByStatus';
import { moveItem } from '../utils/moveItem';

/**
 * Custom hook that encapsulates all logic for bloc manipulation.
 */
export const useBlocActions = (id: string) => {
	const dispatch = useAppDispatch();
	const blocs = useAppSelector(state => state.blocsReducer.blocs);

	// Memoize filtered blocs for performance
	const workingBlocs = useMemo(
		() => filterByStatus(blocs, BlocStatus.WorkingArea),
		[ blocs ]
	);

	const handleClone = useCallback(() => {
		dispatch(addBloc(id));
	}, [ dispatch, id ]);

	const handleRemove = useCallback(() => {
		dispatch(removeBloc(id));
	}, [ dispatch, id ]);

	const handleMove = useCallback(
		(direction: number) => {
			const index = workingBlocs.findIndex(item => item.id === id);
			if(index === -1) return;

			const newBlocs = moveItem(workingBlocs, index, index + direction);
			dispatch(setBlocs(newBlocs));
		},
		[ dispatch, workingBlocs, id ]
	);

	return { handleClone, handleRemove, handleMove };
};

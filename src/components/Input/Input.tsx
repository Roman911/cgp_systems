import { type ChangeEvent, type FC, memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import { changeInputValue } from '../../store/reducers/blocsSlice.ts';

interface InputProps {
	id: string
}

const Input: FC<InputProps> = ({ id }) => {
	const dispatch = useAppDispatch();
	const label = useAppSelector(state => state.blocsReducer.blocs.find((bloc: { id: string; }) => bloc.id === id)?.label);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeInputValue({ id, value: e.target.value }));
	}, [ dispatch, id ]);

	if(label === undefined) {
		return null;
	}

	return (
		<div className='m-auto p-1 bg-white absolute bottom-3.5 left-2.5 right-2.5 rounded-xs'>
			<input
				id={ id }
				autoFocus
				type="text"
				value={ label }
				onChange={ handleChange }
				className='w-full border border-gray-300 rounded-xs py-1 px-2'
			/>
		</div>
	);
};

export default memo(Input);

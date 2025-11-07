import { type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { changeInputValue } from '../../../../store/reducers/blocsSlice.ts';

interface InputProps {
	id: string
}

const Input: FC<InputProps> = ({ id }) => {
	const dispatch = useAppDispatch();
	const { blocs } = useAppSelector(state => state.blocsReducer);
	const bloc = blocs.find(bloc => bloc.id === id)!;

	const handleChange = (value: string) => {
		dispatch(changeInputValue({ id, value }))
	}

	return (
		<div className='m-auto p-1 bg-white absolute bottom-3.5 left-2.5 right-2.5 rounded-xs'>
			<input
				id={ id }
				autoFocus
				type="text"
				value={ bloc.label }
				onChange={ e => handleChange(e.target.value) }
				className='w-full border border-gray-300 rounded-xs p-1'
			/>
		</div>
	)
};

export default Input;

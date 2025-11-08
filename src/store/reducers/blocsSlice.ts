import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialBlocs } from '../../var/initialBlocs';
import { type Bloc, BlocStatus } from '../../types/blocs';

export interface BlocsState {
	blocs: Bloc[]
}

const initialState: BlocsState = {
	blocs: []
}

export const blocsSlice = createSlice({
	name: 'blocs',
	initialState,
	reducers: {
		setBlocs: (state, actions: PayloadAction<Bloc[]>) => {
			state.blocs = [ ...initialBlocs, ...actions.payload ];
		},
		addBloc: (state, actions: PayloadAction<string>) => {
			const base = state.blocs.find(item => item.id === actions.payload);
			if(!base) return;
			state.blocs.push({
				...base,
				id: nanoid(),
				status: BlocStatus.WorkingArea,
			});
		},
		removeBloc: (state, actions: PayloadAction<string>) => {
			state.blocs = state.blocs.filter(item => item.id !== actions.payload);
		},
		changeInputValue: (state, actions: PayloadAction<{ id: string; value: string }>) => {
			const bloc = state.blocs.find(b => b.id === actions.payload.id);
			if(bloc) {
				bloc.label = actions.payload.value;
			}
		}
	},
});

export const { addBloc, removeBloc, setBlocs, changeInputValue } = blocsSlice.actions

export default blocsSlice.reducer

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
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
			state.blocs = [ ...initialState.blocs, ...actions.payload ];
		},
		addBloc: (state, actions: PayloadAction<string>) => {
			const newId = Date.now().toString();
			state.blocs.push({ ...state.blocs.find(item => item.id === actions.payload)!, id: newId, status: BlocStatus.WorkingArea });
		},
		removeBloc: (state, actions: PayloadAction<string>) => {
			state.blocs = state.blocs.filter(item => item.id !== actions.payload);
		},
		changeInputValue: (state, actions: PayloadAction<{ id: string; value: string }>) => {
			const index = state.blocs.findIndex(bloc => bloc.id === actions.payload.id);
			if (index !== -1) {
				state.blocs[index].label = actions.payload.value;
			}
		}
	},
});

export const { addBloc, removeBloc, setBlocs, changeInputValue } = blocsSlice.actions

export default blocsSlice.reducer

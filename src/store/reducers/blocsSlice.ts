import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { type Bloc, BlocStatus } from '../../types/blocs';

export interface BlocsState {
	blocs: Bloc[]
}

const initialState: BlocsState = {
	blocs: [
		{
			id: '1',
			icon: 'headline',
			title: 'Headline',
			status: BlocStatus.Toolbar,
		},
		{
			id: '2',
			icon: 'paragraph',
			title: 'Paragraph',
			status: BlocStatus.Toolbar,
		},
		{
			id: '3',
			icon: 'image',
			title: 'Button',
			status: BlocStatus.Toolbar,
		},
		{
			id: '4',
			icon: 'image',
			title: 'Image',
			status: BlocStatus.Toolbar,
		},
	],
}

export const blocsSlice = createSlice({
	name: 'blocs',
	initialState,
	reducers: {
		setBlocs: (state, actions: PayloadAction<Bloc[]>) => {
			state.blocs = actions.payload;
		},
		addBloc: (state, actions: PayloadAction<Bloc>) => {
			state.blocs.push(actions.payload);
		},
		removeBloc: (state, actions: PayloadAction<string>) => {
			state.blocs = state.blocs.filter(item => item.id !== actions.payload);
		},
	},
});

export const { addBloc, removeBloc, setBlocs } = blocsSlice.actions

export default blocsSlice.reducer

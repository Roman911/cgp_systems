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
			status: BlocStatus.WorkingArea,
		},
	],
}

export const blocsSlice = createSlice({
	name: 'blocs',
	initialState,
	reducers: {
		setBlocs: (state, actions: PayloadAction<Bloc[]>) => {
			state.blocs = actions.payload;
		}
	},
});

export const { setBlocs } = blocsSlice.actions

export default blocsSlice.reducer

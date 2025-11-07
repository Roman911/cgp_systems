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
			label: 'A legendary cap set that feels like new',
			status: BlocStatus.Toolbar,
		},
		{
			id: '2',
			icon: 'paragraph',
			title: 'Paragraph',
			label: 'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.\n' +
				'Using the "Insert" panel on the right, drag and drop \n' +
				'the Abandoned Cart element onto the page below.',
			status: BlocStatus.Toolbar,
		},
		{
			id: '3',
			icon: 'image',
			title: 'Button',
			label: 'Register now',
			status: BlocStatus.Toolbar,
		},
		{
			id: '4',
			icon: 'image',
			title: 'Image',
			src: '/test_img_01.jpg',
			status: BlocStatus.Toolbar,
		},
	],
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

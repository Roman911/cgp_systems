import { type Bloc, BlocStatus } from '../types/blocs.ts';

export const initialBlocs: Bloc[] = [
	{
		id: '1',
		icon: 'headline',
		type: 'headline',
		title: 'Headline',
		label: 'A legendary cap set that feels like new',
		status: BlocStatus.Toolbar,
	},
	{
		id: '2',
		icon: 'paragraph',
		type: 'paragraph',
		title: 'Paragraph',
		label: 'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.\n' +
			'Using the "Insert" panel on the right, drag and drop \n' +
			'the Abandoned Cart element onto the page below.',
		status: BlocStatus.Toolbar,
	},
	{
		id: '3',
		icon: 'image',
		type: 'button',
		title: 'Button',
		label: 'Register now',
		status: BlocStatus.Toolbar,
	},
	{
		id: '4',
		icon: 'image',
		type: 'image',
		title: 'Image',
		src: '/test_img_01.jpg',
		status: BlocStatus.Toolbar,
	},
];

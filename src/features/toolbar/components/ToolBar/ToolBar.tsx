import { Button } from '../';

const toolbarButtons = [
	{ id: 1, icon: 'headline', title: 'Headline' },
	{ id: 2, icon: 'paragraph', title: 'Paragraph' },
	{ id: 3, icon: 'image', title: 'Button' },
	{ id: 4, icon: 'image', title: 'Image' },
] as const;

const ToolBar = () => {
	return <div className='p-4 w-72 grid grid-cols-2 gap-2.5'>
		{ toolbarButtons.map(button => <Button key={ button.id } icon={ button.icon }>{ button.title }</Button>) }
	</div>
};

export default ToolBar;

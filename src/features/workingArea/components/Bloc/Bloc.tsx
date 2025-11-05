import { useDraggable } from '@dnd-kit/core';
import type { FC, ReactNode } from 'react';
import * as Icons from '../../../../components/icons';

const icons = {
	headline: Icons.Headline,
	image: Icons.Image,
	paragraph: Icons.TextAlign,
};

interface BlocProps {
	children: ReactNode
	id: string
	icon: keyof typeof icons
}

const Bloc: FC<BlocProps> = ({ id, icon, children }) => {
	const Icon = icons[icon];

	const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

	const style = transform
		? {
			transform: `translate(${transform.x}px, ${transform.y}px)`,
		}
		: undefined;

	return (
		<button
			ref={ setNodeRef }
			{ ...listeners }
			{ ...attributes }
			className='bg-blue-100 flex flex-col items-center gap-3 pt-3 pb-4.5 px-4 text-xs rounded-md h-max'
			style={ style }
		>
			<Icon className='text-blue-300'/>
			{ children }
		</button>
	)
};

export default Bloc;

import { type FC, type MouseEvent, type ReactNode, useEffect, useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import * as Icons from '../../icons';
import { twMerge } from 'tailwind-merge';

const icons = {
	headline: Icons.Headline,
	image: Icons.Image,
	paragraph: Icons.TextAlign,
};

interface BlocLayoutProps {
	children: ReactNode
	id: string
	isToolbar?: boolean
	isActive?: boolean
	icon: keyof typeof icons
	handleClick: () => void
	setTransform?: (transform: boolean) => void
}

const BlocLayout: FC<BlocLayoutProps> = ({ id, isToolbar, isActive, icon, children, handleClick, setTransform }) => {
	const [ offset, setOffset ] = useState({ x: 0, y: 0 });
	const Icon = icons[icon];
	const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
	const style = transform
		? {
			opacity: 0.8,
			transform: `translate(${transform.x}px, ${transform.y}px)`,
		} : undefined;

	useEffect(() => {
		if(setTransform) {
			setTransform(!!transform);
		}
	}, [setTransform, transform])

	const onMouseUp = (e: MouseEvent) => {
		if(offset.y === e.pageY && offset.x === e.pageX) {
			handleClick();
		}
	};

	const onMouseDown = (e: MouseEvent) => {
		setOffset({ x: e.pageX, y: e.pageY });
	};

	return (
		<div
			ref={ setNodeRef }
			{ ...listeners }
			{ ...attributes }
			onMouseUpCapture={ onMouseUp }
			onMouseDownCapture={ onMouseDown }
			className={ twMerge('relative flex flex-col items-center gap-3 pt-3 pb-4.5 px-4 text-xs rounded-md h-max cursor-pointer group bg-white', isToolbar && 'bg-blue-100 hover:bg-blue-200', isActive && 'bg-blue-200 h-32') }
			style={ style }
		>
			<Icon className='text-blue-300'/>
			{ children }
		</div>
	)
};

export default BlocLayout;

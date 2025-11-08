import { type FC, type MouseEvent, type ReactNode, useEffect, useMemo, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import * as Icons from '../../../icons';
import { twMerge } from 'tailwind-merge';

const icons = {
	headline: Icons.Headline,
	image: Icons.Image,
	paragraph: Icons.TextAlign,
};

interface BlocLayoutProps {
	children: ReactNode;
	id: string;
	isToolbar?: boolean;
	isActive?: boolean;
	icon: keyof typeof icons;
	handleClick: () => void;
	setTransform?: (transform: boolean) => void;
}

const BlocLayout: FC<BlocLayoutProps> = ({
																					 id,
																					 isToolbar = false,
																					 isActive = false,
																					 icon,
																					 children,
																					 handleClick,
																					 setTransform,
																				 }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
	const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const Icon = icons[icon];

	// Optimized style via useMemo
	const style = useMemo(
		() =>
			transform
				? {
					x: transform.x,
					y: transform.y,
					scale: 1.03,
					opacity: 0.9,
					zIndex: 1,
				}
				: {
					x: 0,
					y: 0,
					scale: 1,
					opacity: 1,
				},
		[ transform ]
	);

	useEffect(() => {
		setTransform?.(!!transform);
	}, [ setTransform, transform ]);

	const handleMouseDown = (e: MouseEvent) => {
		startPos.current = { x: e.pageX, y: e.pageY };
	};

	const handleMouseUp = (e: MouseEvent) => {
		const { x, y } = startPos.current;
		if(x === e.pageX && y === e.pageY) handleClick();
	};

	const baseClass =
		'relative flex flex-col items-center gap-3 pt-3.5 pb-4.5 px-4 text-xs rounded-md h-max cursor-pointer group bg-white select-none';
	const toolbarClass = isToolbar && 'bg-blue-100 hover:bg-blue-200';
	const activeClass = isActive && 'bg-blue-200 h-[132px]';

	return (
		<motion.div
			ref={ setNodeRef }
			{ ...listeners }
			{ ...attributes }
			onMouseDownCapture={ handleMouseDown }
			onMouseUpCapture={ handleMouseUp }
			className={ twMerge(baseClass, toolbarClass, activeClass) }
			animate={ style }
			transition={ { type: 'spring', stiffness: 500, damping: 35 } }
		>
			<Icon className="text-blue-300 transition-transform duration-300 group-hover:scale-110"/>
			{ children }
		</motion.div>
	);
};

export default BlocLayout;

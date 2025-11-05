import type { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { twMerge } from 'tailwind-merge';
import { useAppSelector } from '../../hooks/redux';
import { BlocStatus, type Icons } from '../../types/blocs';

interface BlocSectionProps {
	status: BlocStatus;
	renderItem: (bloc: {
		id: string;
		icon: Icons;
		title: string;
	}) => ReactNode;
	className?: string;
	isWorkingArea?: boolean;
}

const BlocSection = ({ status, renderItem, className, isWorkingArea }: BlocSectionProps) => {
	const { blocs } = useAppSelector(state => state.blocsReducer);
	const { setNodeRef } = useDroppable({ id: status });
	const filteredBlocs = blocs.filter(item => item.status === status);

	return (
		<section ref={ setNodeRef } className={ twMerge('p-4 w-full h-full', className) }>
			<div
				className={ twMerge('grid gap-2.5 grid-cols-2', isWorkingArea && 'grid-cols-1') }
			>
				{ filteredBlocs.map(renderItem) }
			</div>
		</section>
	);
};

export default BlocSection;
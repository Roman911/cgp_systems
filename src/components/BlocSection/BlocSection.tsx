import type { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { twMerge } from 'tailwind-merge';
import { useAppSelector } from '../../hooks/redux';
import { type Bloc, BlocStatus } from '../../types/blocs';
import { filterByStatus } from '../../utils/filterByStatus.ts';

interface BlocSectionProps {
	status: BlocStatus;
	renderItem: (bloc: Bloc) => ReactNode;
	className?: string;
	isWorkingArea?: boolean;
}

const BlocSection = ({ status, renderItem, className, isWorkingArea }: BlocSectionProps) => {
	const { blocs } = useAppSelector(state => state.blocsReducer);
	const filteredBlocs = filterByStatus(blocs, status);
	const { setNodeRef } = useDroppable({ id: status });

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
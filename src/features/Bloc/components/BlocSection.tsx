import { type FC, type ReactNode, useMemo } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { twMerge } from 'tailwind-merge';
import { useAppSelector } from '../../../hooks/redux';
import { filterByStatus } from '../../../utils/filterByStatus';
import { NoResultBlock } from '../../../components';
import type { Bloc, BlocStatus } from '../../../types/blocs';

interface BlocSectionProps {
	status: BlocStatus;
	renderItem: (bloc: Bloc, index: number) => ReactNode;
	className?: string;
	isWorkingArea?: boolean;
}

const BlocSection: FC<BlocSectionProps> = ({ status, renderItem, className, isWorkingArea = false }) => {
	const blocs = useAppSelector(state => state.blocsReducer.blocs);
	const { setNodeRef } = useDroppable({ id: status });

	// Memoize filtered blocs to avoid unnecessary recomputations
	const filteredBlocs = useMemo(() => filterByStatus(blocs, status), [ blocs, status ]);

	const hasBlocs = filteredBlocs.length > 0;

	return (
		<section ref={ setNodeRef } className={ twMerge('py-7 px-7 w-full h-full', className) }>
			<div
				className={ twMerge(
					'grid gap-2.5',
					isWorkingArea ? 'grid-cols-1' : 'grid-cols-2'
				) }
			>
				{ hasBlocs ? (
					filteredBlocs.map((bloc, i) => renderItem(bloc, i))
				) : (
					<NoResultBlock text="To add a block, drag or click on it"/>
				) }
			</div>
		</section>
	);
};

export default BlocSection;

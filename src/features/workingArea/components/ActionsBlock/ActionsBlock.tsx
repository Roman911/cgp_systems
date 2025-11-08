import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useBlocActions } from '../../hooks/useBlocActions';
import Button from './Button';

interface ActionsBlockProps {
	id: string;
	isActive: boolean;
}

const ActionsBlock: FC<ActionsBlockProps> = ({ id, isActive }) => {
	const { handleClone, handleRemove, handleMove } = useBlocActions(id);

	return (
		<div
			className={ twMerge(
				'absolute -top-7 right-2.5 hidden gap-2 z-10',
				isActive && 'flex'
			) }
		>
			{/* Move controls */}
			<div className="flex rounded-t-sm bg-blue-400 px-1.5 py-1">
				<Button isArrow icon="arrowDown" onClick={ () => handleMove(1) }/>
				<Button isArrow icon="arrowTop" onClick={ () => handleMove(-1) }/>
			</div>

			{/* Clone / Delete controls */}
			<div className="flex rounded-t-sm bg-cyan-300 px-1.5 py-1">
				<Button icon="clone" onClick={ handleClone }/>
				<Button icon="basket" onClick={ handleRemove }/>
			</div>
		</div>
	);
};

export default ActionsBlock;

import { type FC, type ReactNode, useCallback, useMemo, useState } from 'react';
import { BlocLayout } from '../../../Bloc';
import { Input } from '../../../../components';
import { ActionsBlock } from '../ActionsBlock';
import type { Icons } from '../../../../types/blocs';

interface BlocProps {
	id: string;
	icon: Icons;
	children: ReactNode;
	image?: string;
}

/**
 * Bloc component — renders a draggable layout with actions and content.
 */
const Bloc: FC<BlocProps> = ({ id, icon, children, image }) => {
	const [ isActive, setIsActive ] = useState(false);
	const [ isTransforming, setIsTransforming ] = useState(false);

	// Use useCallback to avoid unnecessary re-renders
	const handleToggleActive = useCallback(() => {
		setIsActive(prev => !prev);
	}, []);

	// Memoize condition rendering logic
	const content = useMemo(() => {
		if(isTransforming || !isActive) return null;

		return image ? (
			<p className="absolute bottom-3.5 left-2.5 right-2.5 rounded-xs bg-white p-1 text-center">
				{ image }
			</p>
		) : (
			<Input id={ id }/>
		);
	}, [ isTransforming, isActive, image, id ]);

	return (
		<div className="relative">
			{ !isTransforming && <ActionsBlock id={ id } isActive={ isActive }/> }
			<BlocLayout
				id={ id }
				icon={ icon }
				handleClick={ handleToggleActive }
				isActive={ isActive }
				setTransform={ setIsTransforming }
			>
				{ children }
			</BlocLayout>
			{ content }
		</div>
	);
};

export default Bloc;

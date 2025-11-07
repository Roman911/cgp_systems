import { type FC, type ReactNode, useState } from 'react';
import { BlocLayout } from '../../../../components';
import { ActionsBlock } from '../ActionsBlock';
import { Input } from '../Input';
import { type Icons } from '../../../../types/blocs';

interface ButtonProps {
	children: ReactNode
	id: string
	icon: Icons
	image?: string
}

const Bloc: FC<ButtonProps> = ({ id, icon, children, image }) => {
	const [ isActive, setIsActive ] = useState(false);
	const [ transform, setTransform ] = useState(false);

	const handleClick = () => {
		setIsActive(prevState => !prevState);
	}

	return (
		<div className='relative'>
			{ !transform && <ActionsBlock id={ id } isActive={ isActive } /> }
			<BlocLayout id={ id } icon={ icon } handleClick={ handleClick } isActive={ isActive } setTransform={ setTransform } >
				{ children }
			</BlocLayout>
			{ !transform && isActive && (image ? <p className='p-1 bg-white absolute bottom-3.5 left-2.5 right-2.5 rounded-xs text-center'>{ image }</p> : <Input id={ id } />) }
		</div>
	)
};

export default Bloc;

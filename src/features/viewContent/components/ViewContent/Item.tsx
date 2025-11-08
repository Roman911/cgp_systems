import { useMemo } from 'react';
import { Button } from '../../../../components';
import type { Bloc } from '../../../../types/blocs.ts';

const Item = ({ item }: { item: Bloc }) => {
	const { label, src, type } = item;

	// Define content based on type
	const content = useMemo(() => {
		switch(type) {
			case 'image':
				return <img src={ src } alt={ label || 'image' } className='mx-auto'/>;
			case 'button':
				return <Button>{ label }</Button>;
			case 'headline':
				return <h1>{ label }</h1>;
			case 'paragraph':
				return <p>{ label }</p>;
			default:
				return <span>{ label }</span>;
		}
	}, [ type, label, src ]);

	return <div className='text-center'>{ content }</div>;
};

export default Item;
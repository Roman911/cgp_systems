// Status type — strictly limited set of valid values
export const BlocStatus = {
	Toolbar: 'TOOLBAR',
	WorkingArea: 'WORKING AREA',
} as const;

export type BlocStatus = (typeof BlocStatus)[keyof typeof BlocStatus];

export type Icons = 'headline' | 'image' | 'paragraph';
export type Type = 'headline' | 'image' | 'paragraph' | 'button';

// Type for a separate unit
export interface Bloc {
	id: string;
	icon: Icons;
	type: Type;
	title: string;
	label?: string;
	src?: string;
	status: BlocStatus;
}

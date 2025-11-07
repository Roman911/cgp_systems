import { type Bloc, BlocStatus } from '../types/blocs';

export function filterByStatus(blocs: Bloc[], status: BlocStatus): Bloc[] {
	return blocs.filter(bloc => bloc.status === status);
}

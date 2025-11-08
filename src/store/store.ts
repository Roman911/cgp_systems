import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit';
import { localStorageMiddleware } from './middleware/localStorage.ts';
import blocsReducer from './reducers/blocsSlice.ts';
import { loadFromLocalStorage } from '../utils/localStorage.ts';

// Load blocs from localStorage (if available)
const preloadedState = {
	blocsReducer: {
		blocs: loadFromLocalStorage('blocs', []),
	},
};

// Typed configureStore
export const setupStore = configureStore({
	reducer: {
		blocsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware),
	preloadedState,
} satisfies ConfigureStoreOptions);

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;

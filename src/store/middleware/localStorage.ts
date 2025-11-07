import type { Middleware } from '@reduxjs/toolkit';
import { saveToLocalStorage } from '../../utils/localStorage.ts';

// Custom middleware to save blocs in localStorage
export const localStorageMiddleware: Middleware = storeAPI => next => action => {
	const result = next(action);
	const state = storeAPI.getState();

	saveToLocalStorage('blocs', state.blocsReducer.blocs);

	return result;
};

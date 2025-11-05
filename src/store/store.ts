import { combineReducers, configureStore } from '@reduxjs/toolkit';

import blocsReducer from './reducers/blocsSlice';

const rootReducer = combineReducers({
	blocsReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

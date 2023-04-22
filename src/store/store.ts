import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
	})

export type TRootState = ReturnType<typeof rootReducer>
export type TAppStore = ReturnType<typeof setupStore>
export type TAppDispatch = TAppStore['dispatch']

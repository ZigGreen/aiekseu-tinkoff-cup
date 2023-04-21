import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from './HomePage'

export const rootReducer = combineReducers({
	home: homeReducer,
})

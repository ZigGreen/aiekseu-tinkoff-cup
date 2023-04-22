import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IExpense } from '@/model/data-types'
import { initialExpenses } from '@/helpers/mocks'

const initialState: IExpense[] = initialExpenses

export const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addExpense: (state, action: PayloadAction<IExpense>) => {
			state.push(action.payload)
		},
	},
})

export const { addExpense } = expensesSlice.actions

export default expensesSlice.reducer

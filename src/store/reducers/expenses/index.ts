import { createSlice } from '@reduxjs/toolkit'
import { IExpense } from '@/model/data-types'
import { initialExpenses } from '@/helpers/mocks'

const initialState: IExpense[] = initialExpenses

export const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {},
})

// export const {  } = expensesSlice.actions

export default expensesSlice.reducer

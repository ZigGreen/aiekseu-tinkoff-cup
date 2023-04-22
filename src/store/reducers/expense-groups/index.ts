import { createSlice } from '@reduxjs/toolkit'
import { IExpenseGroup } from '@/model/data-types'
import { initialExpenseGroups } from '@/helpers/mocks'

const initialState: IExpenseGroup[] = initialExpenseGroups

export const expenseGroupsSlice = createSlice({
	name: 'expenseGroups',
	initialState,
	reducers: {},
})

// export const {  } = expenseGroupsSlice.actions

export default expenseGroupsSlice.reducer

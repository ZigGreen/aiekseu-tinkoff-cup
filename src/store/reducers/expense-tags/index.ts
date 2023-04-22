import { createSlice } from '@reduxjs/toolkit'
import { IExpenseTag } from '@/model/data-types'
import { initialExpenseTags } from '@/helpers/mocks'

const initialState: IExpenseTag[] = initialExpenseTags

export const expenseTagsSlice = createSlice({
	name: 'expenseTags',
	initialState,
	reducers: {},
})

// export const {  } = expenseTagsSlice.actions

export default expenseTagsSlice.reducer

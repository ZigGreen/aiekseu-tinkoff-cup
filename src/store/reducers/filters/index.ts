import { createSlice } from '@reduxjs/toolkit'
import { IFilter } from '@/model/filters-types'

const initialState: IFilter[] = []

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {},
})

// export const {  } = receiptTagsSlice.actions

export default filtersSlice.reducer

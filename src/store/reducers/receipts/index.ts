import { createSlice } from '@reduxjs/toolkit'
import { IReceipt } from '@/model/data-types'
import { initialReceipts } from '@/helpers/mocks'

const initialState: IReceipt[] = initialReceipts

export const receiptsSlice = createSlice({
	name: 'receipts',
	initialState,
	reducers: {},
})

// export const {  } = receiptsSlice.actions

export default receiptsSlice.reducer

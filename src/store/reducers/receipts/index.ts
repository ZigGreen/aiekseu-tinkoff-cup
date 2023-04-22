import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IReceipt } from '@/model/data-types'
import { initialReceipts } from '@/helpers/mocks'

const initialState: IReceipt[] = initialReceipts

export const receiptsSlice = createSlice({
	name: 'receipts',
	initialState,
	reducers: {
		addReceipt: (state, action: PayloadAction<IReceipt>) => {
			state.push(action.payload)
		},
	},
})

export const { addReceipt } = receiptsSlice.actions

export default receiptsSlice.reducer

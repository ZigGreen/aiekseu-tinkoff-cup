import { createSlice } from '@reduxjs/toolkit'
import { IReceiptTag } from '@/model/data-types'
import { initialReceiptTags } from '@/helpers/mocks'

const initialState: IReceiptTag[] = initialReceiptTags

export const receiptTagsSlice = createSlice({
	name: 'receiptsTags',
	initialState,
	reducers: {},
})

// export const {  } = receiptTagsSlice.actions

export default receiptTagsSlice.reducer

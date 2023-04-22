import { createSlice } from '@reduxjs/toolkit'
import { IAccount } from '@/model/data-types'
import { initialAccounts } from '@/helpers/mocks'

const initialState: IAccount[] = initialAccounts

export const accountsSlice = createSlice({
	name: 'accounts',
	initialState,
	reducers: {},
})

// export const {  } = accountsSlice.actions

export default accountsSlice.reducer

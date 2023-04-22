import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAccount } from '@/model/data-types'
import { initialAccounts } from '@/helpers/mocks'

const initialState: IAccount[] = initialAccounts

export const accountsSlice = createSlice({
	name: 'accounts',
	initialState,
	reducers: {
		minusMoney: (state, action: PayloadAction<{ amount: number; id: string }>) => {
			state.find((el) => el.id === action.payload.id)!.bank -= action.payload.amount
		},
	},
})

export const { minusMoney } = accountsSlice.actions

export default accountsSlice.reducer

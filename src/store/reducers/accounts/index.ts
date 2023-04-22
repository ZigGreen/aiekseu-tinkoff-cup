import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAccount } from '@/model/data-types'
import { initialAccounts } from '@/helpers/mocks'

const initialState: IAccount[] = initialAccounts

export const accountsSlice = createSlice({
	name: 'accounts',
	initialState,
	reducers: {
		plusMoney: (state, action: PayloadAction<{ amount: number; id: string }>) => {
			state.find((el) => el.id === action.payload.id)!.bank += action.payload.amount
		},
	},
})

export const { plusMoney } = accountsSlice.actions

export default accountsSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAccount, IExpenseGroup, IExpenseTag, IReceiptTag } from '@/model/data-types'

interface IInput {
	isExpense?: boolean
	from?: IReceiptTag | IAccount
	target?: IAccount | IExpenseGroup
	amount?: number
	comment?: string
	tag?: IExpenseTag
}

function isAccount(obj: any): obj is IAccount {
	return obj && 'currency' in obj
}

const initialState: IInput = {}

export const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		setFrom: (state, action: PayloadAction<IReceiptTag | IAccount>) => {
			state.from = action.payload
			state.isExpense = isAccount(action.payload)
		},
		setTarget: (state, action: PayloadAction<IAccount | IExpenseGroup>) => {
			state.target = action.payload
		},
		setAmount: (state, action: PayloadAction<number>) => {
			state.amount = action.payload
		},
		setComment: (state, action: PayloadAction<string>) => {
			state.comment = action.payload
		},
		setTag: (state, action: PayloadAction<IExpenseTag>) => {
			state.tag = action.payload
		},
	},
})

export const { setFrom, setComment, setTarget, setTag, setAmount } = inputSlice.actions

export default inputSlice.reducer

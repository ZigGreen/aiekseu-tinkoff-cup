import { OverridableComponent } from '@mui/types'
import { SvgIconTypeMap } from '@mui/material'

export interface IExpense {
	amount: number
	account: IAccount
	tag?: IExpenseTag
	group?: IExpenseGroup
	comment?: string
	date: Date
}

export interface IExpenseTag {
	name: string
}

export interface IExpenseGroup {
	name: string
}

export interface ICurrency {
	name: string
	shortName: string
	symbol: string
}

export interface IReceipt {
	amount: number
	account: IAccount
	tag?: IReceiptTag
	comment?: string
	date: Date
}

export interface IReceiptTag {
	name: string
}

export interface IAccount {
	name: string
	currency: ICurrency
	bank: number
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
	countable: boolean
}

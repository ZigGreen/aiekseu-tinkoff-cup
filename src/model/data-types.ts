export interface IExpense {
	id: string
	amount: number
	account: IAccount
	group: IExpenseGroup
	tag?: IExpenseTag
	comment?: string
	date: Date
}

export interface IExpenseTag {
	id: string
	name: string
}

export interface IExpenseGroup {
	id: string
	name: string
}

export interface ICurrency {
	id: string
	name: string
	shortName: string
	symbol: string
}

export interface IReceipt {
	id: string
	amount: number
	account: IAccount
	tag?: IReceiptTag
	comment?: string
	date: Date
}

export interface IReceiptTag {
	id: string
	name: string
}

export interface IAccount {
	id: string
	name: string
	currency: ICurrency
	bank: number
	countable: boolean
}

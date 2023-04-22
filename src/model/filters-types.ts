import { IAccount, ICurrency, IExpenseGroup, IExpenseTag, IReceiptTag } from '@/model/data-types'

export interface IFilter {
	account?: IAccount
	currency?: ICurrency
	expenseTag?: IExpenseTag
	expenseGroup?: IExpenseGroup
	receiptTag?: IReceiptTag
}

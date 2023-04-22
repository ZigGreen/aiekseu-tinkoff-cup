import { combineReducers } from '@reduxjs/toolkit'
import accountsReducer from './accounts'
import expensesReducer from './expenses'
import expenseGroupsReducer from './expense-groups'
import expenseTagsReducer from './expense-tags'
import receiptTagsReducer from './receipt-tags'
import receiptsReducer from './receipts'
import filtersReducer from './filters'

export const rootReducer = combineReducers({
	accounts: accountsReducer,
	expenses: expensesReducer,
	expenseGroups: expenseGroupsReducer,
	expenseTags: expenseTagsReducer,
	receiptTags: receiptTagsReducer,
	receipts: receiptsReducer,
	filters: filtersReducer,
})

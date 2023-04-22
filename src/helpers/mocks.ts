import CreditCardIcon from '@mui/icons-material/CreditCard'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import MoneyIcon from '@mui/icons-material/Money'
import { IAccount, ICurrency, IExpense, IExpenseGroup, IExpenseTag, IReceipt } from '@/model/data-types'

export const initialCurrencies: ICurrency[] = [
	{
		name: 'Российский рубль',
		shortName: 'руб.',
		symbol: '₽',
	},
	{
		name: 'Доллар США',
		shortName: 'USD',
		symbol: '$',
	},
	{
		name: 'USDT TRC-20',
		shortName: 'USDT',
		symbol: 'USDT',
	},
]

export const initialAccounts: IAccount[] = [
	{
		name: 'дебет тинькофф',
		currency: initialCurrencies[0],
		bank: 2310,
		icon: CreditCardIcon,
		countable: true,
	},
	{
		name: 'микрозайм',
		currency: initialCurrencies[0],
		bank: -25000,
		icon: CardGiftcardIcon,
		countable: true,
	},
	{
		name: 'микрозайм2',
		currency: initialCurrencies[1],
		bank: -900,
		icon: CardGiftcardIcon,
		countable: true,
	},
	{
		name: 'наличка',
		currency: initialCurrencies[0],
		bank: 200,
		icon: MoneyIcon,
		countable: true,
	},
]

export const initialExpenseTags: IExpenseTag[] = [
	{
		name: 'пиво',
	},
	{
		name: 'жена',
	},
]

export const initialExpenseGroups: IExpenseGroup[] = [
	{
		name: 'ЗОЖ',
	},
	{
		name: 'ЕДА',
	},
	{
		name: 'Развлечения',
	},
]

export const initialExpenses: IExpense[] = [
	{
		amount: 200,
		account: initialAccounts[0],
		tag: initialExpenseTags[0],
		group: initialExpenseGroups[2],
		date: new Date(1682136000),
	},
	{
		amount: 200,
		account: initialAccounts[0],
		tag: initialExpenseTags[0],
		group: initialExpenseGroups[2],
		date: new Date(1682136000),
	},
]

export const initialReceiptTags: IExpenseTag[] = [
	{
		name: 'зарплата',
	},
	{
		name: 'попрошайничество',
	},
]

export const initialReceipts: IReceipt[] = [
	{
		amount: 25000,
		account: initialAccounts[0],
		tag: initialReceiptTags[0],
		date: new Date(1681876800),
	},
	{
		amount: 200,
		account: initialAccounts[3],
		tag: initialExpenseTags[1],
		comment: 'у метро на билет домой за мкад',
		date: new Date(1682100000),
	},
]

import { IAccount, ICurrency, IExpense, IExpenseGroup, IExpenseTag, IReceipt } from '@/model/data-types'

export const initialCurrencies: ICurrency[] = [
	{
		id: '123',
		name: 'Российский рубль',
		shortName: 'руб.',
		symbol: '₽',
	},
	{
		id: '32155',
		name: 'Доллар США',
		shortName: 'USD',
		symbol: '$',
	},
	{
		id: '1345dga',
		name: 'USDT TRC-20',
		shortName: 'USDT',
		symbol: 'USDT',
	},
]

export const initialAccounts: IAccount[] = [
	{
		id: 'asfsdb',
		name: 'дебет тинькофф',
		currency: initialCurrencies[0],
		bank: 2310,
		countable: true,
	},
	{
		id: 'asFSDkasd',
		name: 'микрозайм',
		currency: initialCurrencies[0],
		bank: -25000,
		countable: true,
	},
	{
		id: 'kmvklxcl',
		name: 'микрозайм2',
		currency: initialCurrencies[1],
		bank: -900,
		countable: true,
	},
	{
		id: 'sadkjbahvsdjb',
		name: 'наличка',
		currency: initialCurrencies[0],
		bank: 200,
		countable: true,
	},
]

export const initialExpenseTags: IExpenseTag[] = [
	{
		id: 'asdljkcnlsak',
		name: 'пиво',
	},
	{
		id: 'kjasdbdnk',
		name: 'жена',
	},
]

export const initialExpenseGroups: IExpenseGroup[] = [
	{
		id: 'akjnsadv',
		name: 'ЗОЖ',
	},
	{
		id: 'asdvjaoe',
		name: 'ЕДА',
	},
	{
		id: 'aweuitjkdns',
		name: 'Развлечения',
	},
]

export const initialExpenses: IExpense[] = [
	{
		id: 'waoifjaesl',
		amount: -300,
		account: initialAccounts[0],
		tag: initialExpenseTags[0],
		group: initialExpenseGroups[2],
		date: new Date('2023-04-21'),
	},
	{
		id: 'oiasNdsv',
		amount: -600,
		account: initialAccounts[0],
		tag: initialExpenseTags[1],
		group: initialExpenseGroups[2],
		date: new Date('2023-04-20'),
	},
]

export const initialReceiptTags: IExpenseTag[] = [
	{
		id: 'ckwmEOAIKLF',
		name: 'зарплата',
	},
	{
		id: 'lkcnjjeklf',
		name: 'попрошайничество',
	},
]

export const initialReceipts: IReceipt[] = [
	{
		id: 'waIJDkwl',
		amount: 25000,
		account: initialAccounts[0],
		tag: initialReceiptTags[0],
		date: new Date('2023-04-20'),
	},
	{
		id: 'aslkcmkeowlm',
		amount: 200,
		account: initialAccounts[3],
		tag: initialExpenseTags[1],
		comment: 'у метро на билет домой за мкад',
		date: new Date('2023-04-21'),
	},
]

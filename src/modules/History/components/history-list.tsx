import React, { FC, useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import Card from '@/ui/Card'
import { useAppSelector } from '@/store/hooks'
import { IExpense, IReceipt } from '@/model/data-types'
import Text from '@/ui/Text'
import whatADay from '@/helpers/day-of-week'
import HistoryItem from '@/modules/History/components/history-item'

// const groupByDay = (items: any) => {
// 	const groupedItems = {}
//
// 	items.forEach((item: any) => {
// 		const date = new Date(item.data)
// 		const day = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString()
//
// 		if (!groupedItems[day]) {
// 			groupedItems[day] = []
// 		}
//
// 		groupedItems[day].push(item)
// 	})
//
// 	return Object.values(groupedItems)
// }

interface IHistoryItem {
	date: string
	transactions: Array<IReceipt | IExpense>
}

const HistoryList: FC = () => {
	const expenses = useAppSelector((state) => state.expenses)
	const receipts = useAppSelector((state) => state.receipts)

	const [history, setHistory] = useState<IHistoryItem[]>([])

	useEffect(() => {
		if (expenses && receipts) {
			const sorted = [...expenses, ...receipts].sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
			)

			const groupedTrasactions: IHistoryItem[] = []

			sorted.forEach((item: IReceipt) => {
				const { date } = item
				const day = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${whatADay(date.getDay())}`

				if (groupedTrasactions.find((e) => e.date === day)) {
					groupedTrasactions.find((e) => e.date === day)!.transactions.push(item)
				} else {
					groupedTrasactions.push({ date: day, transactions: [item] })
				}
			})

			setHistory(groupedTrasactions)
		}
	}, [expenses, receipts])

	return (
		<Root>
			<Text variant={'h4'} component={'p'} mt={4} ml={2}>
				История
			</Text>
			{history &&
				history.length > 0 &&
				history.map((item) => (
					<Card key={item.date}>
						<Text variant={'h6'} pb={1}>
							{item.date}
						</Text>
						{item.transactions.map((transaction) => (
							<HistoryItem key={transaction.id} item={transaction} />
						))}
					</Card>
				))}
		</Root>
	)
}

const Root = styled(Box)({
	width: '100%',
})

export default HistoryList

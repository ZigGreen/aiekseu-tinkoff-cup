import React, { FC } from 'react'
import { Box, Divider, styled } from '@mui/material'
import { IExpense, IReceipt } from '@/model/data-types'
import Text from '@/ui/Text'

const HistoryItem: FC<{ item: IExpense | IReceipt }> = ({ item }) => (
	<>
		<Root py={2}>
			<Line>
				<Text variant={'h6'} component={'span'} fontWeight={400}>
					{item.account.name}
				</Text>
				<Text
					variant={'h5'}
					component={'span'}
					style={{
						color: item.amount >= 0 ? 'green' : 'red',
					}}
				>
					{item.amount > 0 && '+'}
					{item.amount} {item.account.currency.symbol}
				</Text>
			</Line>
			<Line>
				<Text variant={'body1'}>{'group' in item && item.group?.name}</Text>
				<Text variant={'body1'}>
					{item.tag && '#'}
					{item.tag?.name}
				</Text>
			</Line>
			{item.comment && (
				<Text
					variant={'body2'}
					component={'span'}
					style={{
						color: 'gray',
					}}
				>
					{item.comment}
				</Text>
			)}
		</Root>
		<Divider />
	</>
)

const Root = styled(Box)({
	width: '100%',
})

const Line = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
})

export default HistoryItem

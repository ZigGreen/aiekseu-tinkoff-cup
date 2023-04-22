import React, { FC } from 'react'
import { Box, Grid, styled } from '@mui/material'
import { useAppSelector } from '@/store/hooks'
import Text from '@/ui/Text'
import Card from '@/ui/Card'
import { accountColors } from '@/config/colors'

const AccountsCard: FC = () => {
	const accounts = useAppSelector((state) => state.accounts)

	return (
		<Card>
			<Text variant={'h4'} component={'p'} width={'100%'} textAlign={'center'} pb={2}>
				Счета
			</Text>
			<AccountsContainer
				container
				alignItems={'top'}
				direction={'row'}
				justifyContent={'space-between'}
				rowSpacing={4}
			>
				{accounts.map((acc, index) => (
					<Account item key={acc.name} xs={6} md={4}>
						<AccountIcon index={index} />
						<Text variant={'subtitle1'} mt={1}>
							{acc.name}
						</Text>
						<Text variant={'h6'} component={'p'}>
							{acc.bank} {acc.currency.symbol}
						</Text>
					</Account>
				))}
			</AccountsContainer>
		</Card>
	)
}

const AccountsContainer = styled(Grid)({
	width: '100%',
})
const Account = styled(Grid)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

const AccountIcon = styled(Box, { shouldForwardProp: (props) => props !== 'index' })<{ index: number }>(
	({ index }) => ({
		height: 48,
		width: 48,
		background: accountColors[index],
		borderRadius: '100%',
	})
)

export default AccountsCard

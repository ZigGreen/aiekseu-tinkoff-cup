import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import { useAppSelector } from '@/store/hooks'
import Card from '@/ui/Card'
import Text from '@/ui/Text'
import { accountColors } from '@/config/colors'

const GroupsList = () => {
	const groups = useAppSelector((state) => state.expenseGroups)

	return (
		<Card>
			<Text variant={'h5'} component={'p'} width={'100%'} textAlign={'start'} pb={1}>
				Тэги расходов
			</Text>
			<GroupsContainer container alignItems={'top'} direction={'row'} justifyContent={'start'} rowSpacing={4}>
				{groups.map((group, index) => (
					<Group item key={group.id} xs={4} md={3}>
						<GroupIcon index={index + 3} />
						<Text variant={'subtitle1'} mt={1}>
							{group.name}
						</Text>
					</Group>
				))}
			</GroupsContainer>
		</Card>
	)
}

const GroupsContainer = styled(Grid)({
	width: '100%',
})
const Group = styled(Grid)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

const GroupIcon = styled(Box, { shouldForwardProp: (props) => props !== 'index' })<{ index: number }>(({ index }) => ({
	height: 48,
	width: 48,
	background: accountColors[index],
	borderRadius: '100%',
}))

export default GroupsList

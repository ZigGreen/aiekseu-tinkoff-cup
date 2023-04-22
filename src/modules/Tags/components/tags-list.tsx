import React from 'react'
import { Box, Divider, Grid, styled } from '@mui/material'
import { useAppSelector } from '@/store/hooks'
import Card from '@/ui/Card'
import Text from '@/ui/Text'
import { accountColors } from '@/config/colors'

const TagsList = () => {
	const expenseTags = useAppSelector((state) => state.expenseTags)
	const receiptTags = useAppSelector((state) => state.receiptTags)

	return (
		<Card>
			<Text variant={'h5'} component={'p'} width={'100%'} textAlign={'start'} pb={1}>
				Тэги расходов
			</Text>
			<TagsContainer container alignItems={'top'} direction={'row'} justifyContent={'start'} rowSpacing={4}>
				{expenseTags.map((tag, index) => (
					<Tag item key={tag.id} xs={4} md={3}>
						<TagIcon index={index} />
						<Text variant={'subtitle1'} mt={1}>
							#{tag.name}
						</Text>
					</Tag>
				))}
			</TagsContainer>
			<Divider />
			<Text variant={'h5'} component={'p'} width={'100%'} textAlign={'start'} pb={1} mt={2}>
				Тэги доходов
			</Text>
			<TagsContainer container alignItems={'top'} direction={'row'} justifyContent={'start'} rowSpacing={4}>
				{receiptTags.map((tag, index) => (
					<Tag item key={tag.id} xs={4} md={3}>
						<TagIcon index={index + 2} />
						<Text variant={'subtitle1'} mt={1}>
							#{tag.name}
						</Text>
					</Tag>
				))}
			</TagsContainer>
		</Card>
	)
}

const TagsContainer = styled(Grid)({
	width: '100%',
})
const Tag = styled(Grid)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

const TagIcon = styled(Box, { shouldForwardProp: (props) => props !== 'index' })<{ index: number }>(({ index }) => ({
	height: 48,
	width: 48,
	background: accountColors[index],
	borderRadius: '100%',
}))

export default TagsList

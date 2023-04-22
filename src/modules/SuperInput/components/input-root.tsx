import React, { FC } from 'react'
import { Box, Button, styled } from '@mui/material'
import Text from '@/ui/Text'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import FromInput from '@/modules/SuperInput/components/from-input'
import TargetInput from '@/modules/SuperInput/components/target-input'
import AmountInput from '@/modules/SuperInput/components/amount-input'
import TagInput from '@/modules/SuperInput/components/tag-input'
import CommentInput from '@/modules/SuperInput/components/comment-input'
import { IAccount, IExpense, IExpenseGroup } from '@/model/data-types'
import { addExpense } from '@/store/reducers/expenses'
import { minusMoney } from '@/store/reducers/accounts'

const InputRoot: FC = () => {
	const input = useAppSelector((state) => state.input)

	const dispatch = useAppDispatch()

	const handleAddItem = () => {
		if (input.isExpense) {
			const expense: IExpense = {
				id: URL.createObjectURL(new Blob([])).slice(-36),
				amount: input.amount as number,
				account: input.from as IAccount,
				group: input.target as IExpenseGroup,
				tag: input.tag,
				comment: input.comment,
				date: new Date(Date.now()),
			}

			dispatch(addExpense(expense))
			dispatch(minusMoney({ id: input.from!.id, amount: input.amount as number }))
		}
	}

	// id: string
	// amount: number
	// account: IAccount
	// group: IExpenseGroup
	// tag?: IExpenseTag
	// comment?: string
	// date: Date

	return (
		<>
			<Text variant={'h1'} textAlign={'center'} width={'100%'} fontWeight={100}>
				Расходы мои расходы
			</Text>
			<Root>
				<Content>
					<FromInput />
					<TargetInput />
					<AmountInput />
					<TagInput />
					<CommentInput />
					{input.from && input.target && input.amount && (
						<Button sx={{ flex: 1 }} onClick={handleAddItem}>
							<Text variant={'h5'} component={'span'} color={'gray'}>
								+
							</Text>
						</Button>
					)}
				</Content>
			</Root>
		</>
	)
}

const Root = styled(Box)({
	width: '80%',
	marginTop: 48,
	marginBottom: 64,
	height: 64,
	marginLeft: '10%',
	marginRight: '10%',
	borderRadius: '16px',
	background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
	boxShadow: '24px 24px 48px #bebebe, -24px -24px 48px #ffffff',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',
})

const Content = styled(Box)({
	width: '100%',
	marginLeft: 24,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
})

export default InputRoot

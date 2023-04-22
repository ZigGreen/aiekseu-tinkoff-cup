import React, { FC } from 'react'
import { Box, styled } from '@mui/material'
import Text from '@/ui/Text'

const InputRoot: FC = () => (
	// const input = useAppSelector((state) => state.input)
	// const groups = useAppSelector((state) => state.expenseGroups)
	// const expenseTags = useAppSelector((state) => state.expenseTags)
	//
	// const [step, setStep] = useState(0)
	// const [dialogOpen, setDialogOpen] = useState(false)

	<>
		<Text variant={'h1'} textAlign={'center'} width={'100%'} fontWeight={100}>
			Расходы мои расходы
		</Text>
		<Root>
			<Content>
				<Text variant={'body1'} color={'gray'}>
					из дебет тинькофф в Развлечения 1000 руб. 22.04.2023 #тэг комментарий{' '}
				</Text>
			</Content>
		</Root>
	</>
)

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
	marginLeft: 24,
})

export default InputRoot

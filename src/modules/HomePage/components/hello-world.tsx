import React, { FC } from 'react'
import { Box, styled } from '@mui/material'
import Text from '@/ui/Text'

const HelloWorldText: FC = () => (
	<Root component={'main'}>
		<Text variant={'h1'}>Hello, IT&apos;s Tinkoff Solution Cup</Text>
	</Root>
)

const Root = styled(Box)({
	width: '100%',
	height: '100svh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

export default HelloWorldText

import React, { FC } from 'react'
import { Box, styled } from '@mui/material'
import Text from '@/ui/Text'
import { useAppSelector } from '@/store/hooks'

const HelloWorldText: FC = () => {
	const projectName = useAppSelector((state) => state.home)

	return (
		<Root component={'main'}>
			<Text variant={'h1'}>Hello, {projectName}!</Text>
		</Root>
	)
}

const Root = styled(Box)({
	width: '100%',
	height: '100svh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

export default HelloWorldText

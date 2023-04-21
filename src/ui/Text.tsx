import React, { FC } from 'react'
import { Typography, TypographyProps } from '@mui/material'

const Text: FC<TypographyProps> = (props) => {
	const { children } = props

	return <Typography {...props}>{children}</Typography>
}

export default Text

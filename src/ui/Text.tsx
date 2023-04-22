import React, { FC } from 'react'
import { Typography, TypographyProps } from '@mui/material'

export interface IText extends TypographyProps<'span', { component?: string }> {}

const Text: FC<IText> = (props) => {
	const { children } = props

	return <Typography {...props}>{children}</Typography>
}

export default Text

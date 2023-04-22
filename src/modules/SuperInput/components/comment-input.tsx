import React from 'react'
import { FormControl, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setComment } from '@/store/reducers/input'
import Text from '@/ui/Text'

const CommentInput = () => {
	const input = useAppSelector((state) => state.input)

	const dispatch = useAppDispatch()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setComment(event.target.value))
	}

	return input.isExpense && input.from && input.target && input.amount ? (
		<>
			<Text variant={'body1'} color={'gray'} ml={2}>
				комментарий
			</Text>
			<FormControl sx={{ m: 1, minWidth: 40 }} size={'small'}>
				<TextField
					variant={'standard'}
					value={input.comment ?? ''}
					onChange={handleChange}
					sx={{ width: '100%' }}
				/>
			</FormControl>
		</>
	) : null
}

export default CommentInput

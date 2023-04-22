import React from 'react'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTag } from '@/store/reducers/input'
import { IExpenseTag } from '@/model/data-types'
import StyledOutlinedInput from '@/ui/Select'
import Text from '@/ui/Text'

const TagInput = () => {
	const input = useAppSelector((state) => state.input)

	const expenseTags = useAppSelector((state) => state.expenseTags)

	const dispatch = useAppDispatch()

	const handleChange = (event: SelectChangeEvent) => {
		const from = expenseTags.find((el) => el.id === event.target.value)
		dispatch(setTag(from as IExpenseTag))
	}

	return input.isExpense && input.from && input.target && input.amount ? (
		<>
			<Text variant={'body1'} color={'gray'} ml={2} sx={{ transform: 'translateX(16px)' }}>
				тэг #
			</Text>
			<FormControl sx={{ m: 1, minWidth: 120 }} size={'small'}>
				<Select required value={input.tag?.id ?? ''} onChange={handleChange} input={<StyledOutlinedInput />}>
					{expenseTags.map((item) => (
						<MenuItem key={item.id} value={item.id}>
							{item.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	) : null
}

export default TagInput

import React from 'react'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setFrom } from '@/store/reducers/input'
import { IAccount, IReceiptTag } from '@/model/data-types'
import StyledOutlinedInput from '@/ui/Select'
import Text from '@/ui/Text'

const FromInput = () => {
	const input = useAppSelector((state) => state.input)

	const receiptTags = useAppSelector((state) => state.receiptTags)
	const accounts = useAppSelector((state) => state.accounts)

	const dispatch = useAppDispatch()

	const handleChange = (event: SelectChangeEvent) => {
		const from = [...receiptTags, ...accounts].find((el) => el.id === event.target.value)
		dispatch(setFrom(from as IAccount | IReceiptTag))
	}

	return (
		<>
			<Text variant={'body1'} color={'gray'}>
				из
			</Text>
			<FormControl sx={{ m: 1, minWidth: 120 }} size={'small'}>
				<Select required value={input.from?.id ?? ''} onChange={handleChange} input={<StyledOutlinedInput />}>
					{receiptTags.map((item) => (
						<MenuItem key={item.id} value={item.id}>
							{item.name}
						</MenuItem>
					))}
					{accounts.map((item) => (
						<MenuItem key={item.id} value={item.id}>
							{item.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	)
}

export default FromInput

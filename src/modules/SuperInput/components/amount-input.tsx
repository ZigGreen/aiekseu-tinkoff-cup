import React from 'react'
import { FormControl, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setAmount } from '@/store/reducers/input'
import Text from '@/ui/Text'

const AmountInput = () => {
	const input = useAppSelector((state) => state.input)

	const dispatch = useAppDispatch()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setAmount(Number(event.target.value)))
	}

	return input.from && input.target ? (
		<>
			<FormControl sx={{ m: 1, minWidth: 40 }} size={'small'}>
				<TextField variant={'standard'} value={input.amount ?? 0} onChange={handleChange} sx={{ width: 60 }} />
			</FormControl>
			<Text variant={'body1'} color={'gray'}>
				{'currency' in input.from && input.from.currency.symbol}
				{'currency' in input.target && input.target.currency.symbol}
			</Text>
		</>
	) : null
}

export default AmountInput

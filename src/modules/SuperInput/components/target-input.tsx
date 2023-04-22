import React from 'react'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTarget } from '@/store/reducers/input'
import { IAccount, IExpenseGroup } from '@/model/data-types'
import StyledOutlinedInput from '@/ui/Select'
import Text from '@/ui/Text'

const TargetInput = () => {
	const input = useAppSelector((state) => state.input)

	const expenseGroups = useAppSelector((state) => state.expenseGroups)
	const accounts = useAppSelector((state) => state.accounts)

	const dispatch = useAppDispatch()

	const handleChange = (event: SelectChangeEvent) => {
		const from = [...expenseGroups, ...accounts].find((el) => el.id === event.target.value)
		dispatch(setTarget(from as IAccount | IExpenseGroup))
	}

	return input.from ? (
		<>
			<Text variant={'body1'} color={'gray'}>
				в
			</Text>
			<FormControl sx={{ m: 1, minWidth: 120 }} size={'small'}>
				<Select required value={input.target?.id ?? ''} onChange={handleChange} input={<StyledOutlinedInput />}>
					{input.isExpense &&
						expenseGroups.map((item) => (
							<MenuItem key={item.id} value={item.id}>
								{item.name}
							</MenuItem>
						))}
					{!input.isExpense &&
						accounts.map((item) => (
							<MenuItem key={item.id} value={item.id}>
								{item.name}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</>
	) : null
}

export default TargetInput

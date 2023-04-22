import { OutlinedInput, styled } from '@mui/material'

const StyledOutlinedInput = styled(OutlinedInput)({
	'& .MuiOutlinedInput-notchedOutline': {
		// Hide the default outline border
		border: 'none',
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		// Remove the border that appears on hover
		border: 'none',
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		// Remove the border that appears on focus
		border: 'none',
	},
})

export default StyledOutlinedInput

import React, { FC } from 'react'
import { GlobalStyles, Theme } from '@mui/material'

const UserGlobalStyles: FC<{ theme: Theme }> = () => (
	<GlobalStyles
		styles={{
			body: {
				margin: 0,
				backgroundColor: '#e0e0e0;',
			},
		}}
	/>
)

export default UserGlobalStyles

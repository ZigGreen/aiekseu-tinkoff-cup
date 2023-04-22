import React, { FC, PropsWithChildren } from 'react'
import { NextPage } from 'next'
import { Grid, styled } from '@mui/material'
import { AccountsCard } from '@/modules/Accounts'
import { HistoryList } from '@/modules/History'
import { TagsCard } from '@/modules/Tags'
import { GroupsCard } from '@/modules/Groups'
import SuperInput from '@/modules/SuperInput'

const Home: NextPage = () => (
	<>
		<SuperInput />
		<Root container>
			<Container>
				<AccountsCard />
				<TagsCard />
				<GroupsCard />
			</Container>
			<Container>
				<HistoryList />
			</Container>
		</Root>
	</>
)

const Root = styled(Grid)({
	display: 'flex',
	flexDirection: 'row',
})

const Container: FC<PropsWithChildren> = ({ children }) => (
	<Grid item xs={12} md={6}>
		{children}
	</Grid>
)

export default Home

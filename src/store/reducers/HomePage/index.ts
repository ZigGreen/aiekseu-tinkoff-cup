import { createSlice } from '@reduxjs/toolkit'

const initialState: string = `IT's Tinkoff Solution Cup`

export const homePageSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
})

// export const {  } = homePageSlice.actions

export default homePageSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        isOn: false,
    },
    reducers: {
        setIsOn: (state) => {
            state.isOn = !state.isOn;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setIsOn } = headerSlice.actions

export default headerSlice.reducer
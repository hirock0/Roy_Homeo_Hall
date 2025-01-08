"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
    isError: false,
    isLoading: false
}
export const slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        // add your reducers here
    },

})
export const { actions, reducer } = slice
export default slice.reducer

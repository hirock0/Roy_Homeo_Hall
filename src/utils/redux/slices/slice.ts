"use client"

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
interface InitialState {
    user: any,
    isError: boolean,
    isLoading: boolean
}
const initialState = {
    user: null,
    isError: false,
    isLoading: false
} as InitialState

export const allApiData: any = createAsyncThunk("allApiData", async () => {
    const response = await axios.get(`${process.env.DOMAIN_URL}/pages/api/authUser`)
    const loggedUser = response?.data?.verifiedToken
    return loggedUser
})

export const slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        // add your reducers here
    },
    extraReducers: (builder) => {
        builder.addCase(allApiData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(allApiData.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(allApiData.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })

    }
})
export const { } = slice.actions
export default slice.reducer

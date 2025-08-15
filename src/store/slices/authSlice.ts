import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { socialAPI } from "../../api/api";

export const loginThunk = createAsyncThunk(
    'loginThunk',
    async (loginData : {email : string, password : string}) => {
        const resposne = await socialAPI.login(loginData)
        
        return resposne.data.data
    }
)

const initialState = {
    userId : null,
    token : ''
}

const authSlice = createSlice({
    name : "authSlice",
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.userId = action.payload.userId
            state.token = action.payload.token
        })
    },
})

export default authSlice.reducer
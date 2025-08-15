import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { socialAPI } from "../../api/api";
import type { IUsersStateType } from "../types";

export const getAllUsers = createAsyncThunk(
    'getAllUsers',
    async () => {
        const response = await socialAPI.getUsers()

        return response
    }
)

const initialState : IUsersStateType = {
    items : []
}
const usersSlice = createSlice({
    name : 'usersSlice',
    initialState,
    reducers : {},
    extraReducers(builder) {
        builder.addCase(getAllUsers.pending, (state : any, action) => {
            state.items = action.payload
        })
    },
})

export default usersSlice.reducer
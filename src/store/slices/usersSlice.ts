import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";
import { socialAPI } from "../../api/api";
import type { IUsersStateType } from "../types";
import type { IUsersData } from "../../types/userTypes";

export const getAllUsers = createAsyncThunk<IUsersData, {page : number, totalPageCount : number}>(
    'getAllUsers',
    async ({page, totalPageCount}) => {
        const response = await socialAPI.getUsers({page, totalPageCount})

        return response.data
    }
)

const initialState : IUsersStateType = {
    items : [],
    totalCount : 0,
    page : 1,
    totalPageCount : 100
}
const usersSlice = createSlice({
    name : 'usersSlice',
    initialState,
    reducers : {
        changePage(state, action){
            state.items = []
            state.page = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getAllUsers.fulfilled, (state, action : PayloadAction<IUsersData>) => {
            state.items = action.payload.items
            state.totalCount = action.payload.totalCount
        })
    },
})

export const {changePage} = usersSlice.actions
export default usersSlice.reducer
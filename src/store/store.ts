import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";

const store = configureStore({
    reducer : {
        usersPage : usersSlice
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store
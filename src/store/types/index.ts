import type { IUser } from "../../types/userTypes";

interface IUsersStateType {
    items : Array<IUser>,
    totalCount : number,
    page : number,
    totalPageCount : number
}

export type {IUsersStateType}
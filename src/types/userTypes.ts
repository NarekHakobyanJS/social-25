 interface IUser {
    name : string,
    id : number,
    photos : {small : null | string, large : null | string},
    status : null | string,
    followed : boolean
}

interface IUsersData {
    items : Array<IUser>,
    totalCount : number,
    error : null
}

export type {IUser, IUsersData}
import type {IUsersData} from '../types/userTypes'
import axios from "axios";

class SocialAPI {
    constructor(){

    }

    static insanceAxios(){
        return axios.create({
            baseURL : 'https://social-network.samuraijs.com/api/1.0'
        })
    }

    async getUsers({page, totalPageCount} : {page : number, totalPageCount : number}){
        return SocialAPI.insanceAxios().get<IUsersData>(`/users?page=${page}&count=${totalPageCount}`)
    }

    async login(loginData : {email : string, password : string}){
       return SocialAPI.insanceAxios().post('/auth/login', loginData)
    }

}

export const socialAPI = new SocialAPI()
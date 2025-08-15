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

    async getUsers(){
        return SocialAPI.insanceAxios().get<IUsersData>('/users')
    }
}

export const socialAPI = new SocialAPI()
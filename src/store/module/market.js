import { Promise } from "core-js"
import Vue from 'vue'
import { reqAllUsers, reqCreateActivity, reqAllActivity, reqDeleteActivity} from "@/api/user"
import {reqDownLoadActivity} from '@/api/file'

export default {
    namespaced:true,
    state:{

    },
    actions:{
        async getAllUsers(){
            const result = await reqAllUsers()
            if(result.code == 200){
                return result.data;
            }
            return Promise.reject(new Error("faile"))
        },
        async createActivity(commit,formData){
            const result = await reqCreateActivity(formData)
            if(result.code == 200){
                return "ok";
            }
            return Promise.reject(new Error("faile"))
        },
        async allActivity(commit, params){
            const result = await reqAllActivity(params)
            if(result.code == 200){
                return result.data
            }
            return Promise.reject(new Error("faile"))
        },
        async deleteActivity(commit, deleteId){
            const result = await reqDeleteActivity(deleteId)
            if(result.code == 200){
                return result.data
            }
            return Promise.reject(new Error("faile"))
        },
        async downLoadActivity(commit){
            const result = await reqDownLoadActivity()
            return result
        }
    },
    mutations:{

    }
}
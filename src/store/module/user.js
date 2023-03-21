import Vue from 'vue';
import { Promise } from 'core-js';
import { setAccessToken , removeAccessToken, removeRefreshToken, setRefreshToken} from '@/utils/token'
import {reqLogin, reqLoginOut, reqUserInfo} from '@/api/user'
export default{
    namespaced:true,
    state:{
        userInfo:{

        }
    },
    actions:{
        async login(context,loginForm){
            let result = await reqLogin(loginForm);
            if(result.code == '1'){
                context.commit('LOGIN',result.data)
            }
            return result;
        },
        async loginOut(context){
            let result = await reqLoginOut();
            if(result.code == "200"){
                context.commit("LoGINOUT")
                return "ok";
            }
            return Promise.reject(new Error("faile"))
        },
        async getUserInfo(context){
            let result = await reqUserInfo();
            if(result.code == 200){
                context.commit("GETUSERINFO",result.data)
                return "ok";
            }
            return Promise.reject(new Error("faile"))
        }
    },
    mutations:{
        LOGIN(state,data){
            setAccessToken(data.access)
            setRefreshToken(data.refresh)
        },
        LoGINOUT(state){
            removeAccessToken()
            removeRefreshToken()
            state.userInfo = {}
        },
        GETUSERINFO(state, data){
            state.userInfo = Object.assign({}, state.userInfo, data)
        }
    }
}
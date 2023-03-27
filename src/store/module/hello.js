import {reqGetImage} from '@/api/file'
import Vue from 'vue';
import { Promise } from 'core-js';
export default{
    namespaced:true,
    state:{
        
    },
    actions:{
        async getImage(context){
            let data = await reqGetImage();
            if(data != null){
                return data;
            }
        }
    },
    mutations:{
    }
}
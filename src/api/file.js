import requests from "./request";
import axios from 'axios'
import {getToken} from '@/utils/token.js'
//请求获取文件
export const reqGetImage = (p) => requests({
    url:'/index/getImage',
    method:'get',
    responseType:"blob"
})


/*
//上传文件 post 参数文件对象
export const reqUpload = (p) => axios({
    url:'http://192.168.8.126:8082/uploads', 
    method:'post',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'token' : getToken(),
    },
    data:p
})
//请求文件列表 post 文件数组
export const reqFileList = () => requests({
    url:'/getUserFiles',
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
})
//请求不同类型的文件 post 
export const reqFileType = (p) => requests({
    url:'/getFileType',
    method:'post',
    data:{
        fileType:p
    }
})
//请求下载文件
export const reqDownload = (p) => requests({
    url:'/download',
    method:'post',
    data:{
       "fileId":p
    },
    responseType:"blob"
})
export const reqRecycleFile = (p) => requests({
    url:'/recycleFile',
    method:'post'
})
//删除文件
export const reqDeleteFile = (p) => requests({
    method:'DELETE',
    url:'/delete',
    data:{
        fileId:p,
    }
})
export const reRecyleFile = (p) => requests({
    method:'PUT',
    url:'/recoveryFile',
    data:{
        fileId:p
    }
})
export const  reqAbsDeleteFile = (p) => requests({
    method:'DELETE',
    url:'/foreverDel',
    data:{
        fileId:p
    }
})
*/
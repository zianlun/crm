import requests from "./request"


export const reqLogin = (p) => {
    return requests({
        method:'get',
        url:'/user/login',
        params:p,
        responseType:'json'
    })
}
export const reqLoginOut = () => {
    return requests({
        method:'post',
        url:'/user/loginOut'
    })
}
//获取用户信息 get请求 参数为token
// url : /getUserInfo
export const reqUserInfo = () =>{
    return requests({
        method:'get',
        url:'user/getInfo',
    })
}

export const reqAllUsers = () => {
    return requests({
        method:'get',
        url:'activity/allUsers'
    })
} 

export const reqCreateActivity = (p)  => {
    return requests({
        method:'post',
        url:'activity/createActivity',
        data:p
    })
}

export const reqAllActivity = (p) => {
    return requests({
        method:'get',
        url:'activity/allActivity',
        params:p
    })
}

export const reqDeleteActivity = (p) => {
    return requests({
        method:'DELETE',
        url:'activity/deleteActivity',
        data:p
    })
}
/*
//注册请求 get 参数name, pwd
export const reqRegister = (p) => {
    return requests({
        method:'post',
        url:'/register',
        data:p,
        responseType:'json'
    })
}
//请求验证码 get 参数邮箱地址
export const reqGetCode = (p) => requests({
    url:`/captcha`,
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    data:{
        email:p
    }
})
//登录请求 get 参数为用户名和密码
export const reqLogin = (p) =>{
    return requests({
        method:'get',
        url:`/login?id=${p.id}&pwd=${p.pwd}`,
        responseType:'json'
    })
}

//修改密码 put请求 /forgetPassword
export const reqModifyPwd = (p) => {
    return requests({
        method:'put',
        data:p,
        url:'/forgetPassword',
        headers:{
            'Content-Type':'application/json'
        }
    })
}
//退出登录 reqLoginOut /exit
export const reqLoginOut = () => {
    return requests({
        method:'post',
        url:'/exit'
    })
}

*/
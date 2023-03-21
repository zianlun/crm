//axios的二次封装
import axios from 'axios'
//引入token
import { getAccessToken, getRefreshToken, removeAccessToken, setAccessToken, removeRefreshToken} from '@/utils/token'
//引入进度条
//start:进度条开始 done:进度条结束
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"
//引入router
import "@/config/router"
import router from '@/config/router'
//1:利用axios的方法create,创建axios实例
//2：request就是axios,稍微配置，修饰初始化一下
const requests = axios.create({
	//配置对象
	//基础路径，发请求的时候，路径中会出现api
	baseURL:'http://localhost:8080/crm',
	//请求超时的时间为5s
	timeout:5000,
})
//配置请求头 application/json
requests.defaults.headers.post['Content-Type'] =
     ' application/json'
	// 'application/x-www-form-urlencoded'
//请求拦截器：在发请求之前可以检测到，可以在发请求之前去做一些事情
requests.interceptors.request.use((config) => {
	//config:配置对象，对象里面有一个属性很重要，header请求头
	//进度条开始动
	nprogress.start();
	//在请求头里面添加token
	if (getAccessToken()){
		//向后端询问access_token是否过期
		config.headers.access = getAccessToken()
		config.headers.refresh = getRefreshToken()
	}
	return config;
})

//设置刷新变量
let isRefreshing = false;
//响应拦截器
requests.interceptors.response.use((response) => {
	//成功的回调函数：服务器相应的数据回来之后，响应拦截器可以检测到，可以做一事情
	//进度条结束
	nprogress.done();
	/**	
	 * 处理响应状态为401 和 403 的请求
	 */
	if(response.data.code === 401 && 
		!response.config.url.includes("/jwt/refreshToken")){
		if(!getRefreshToken()){
			router.push("/index")
			removeAccessToken()
			return response
		}else{
			if(!isRefreshing){
				isRefreshing = true
				return reqRefreshAccess().then(
					resp => {
						if(resp.data.code === 403){
							router.push("/index")
							removeAccessToken()
							removeRefreshToken()
							isRefreshing = false
							return resp
						}else{
							setAccessToken(resp.data.access)
							response.config.headers.access = getAccessToken()
							isRefreshing = false
							//重新发送请求
							return requests.request(response.config)
						}
						
					}
				)
			}
		}
	}
	else if(response.data.code === 403){
		router.push("/index")
		removeAccessToken()
		removeRefreshToken()
		isRefreshing = false
		return response
	}
	return response.data;
},(error) => {
	//响应失败的回调函数
	//静态函数Promise.reject返回一个被拒绝的Promise对象。
	//通过使用 Error的实例 获取错误原因（reason）对调试和选择性错误 捕捉很有帮助。
	return Promise.reject(new Error('faile'));
});
export default requests;

/*
npm install --save nprogress   下载进度条命令
nprogress.start()    进度条开始
nprogress.done()     进度条结束
*/

/**
 * 验证token是否过期 get 无参 
 * @param {*} p 
 * @returns 
 */
export const reqAccessStatus = () => requests({
    url:'/jwt/accessStatus',
    method:'get',
})

/*
*
*刷新token请求
 */
export const reqRefreshAccess = () => requests({
	url:'/jwt/refreshToken',
	method:'get'
})

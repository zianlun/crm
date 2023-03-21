//管理  access_token的函数
export const setAccessToken = (ACCESS_TOKEN) => {
    localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN)
}
export const getAccessToken = () =>{
    return localStorage.getItem('ACCESS_TOKEN')
}
export const removeAccessToken = () => {
    localStorage.removeItem("ACCESS_TOKEN")
}

//管理  refresh_token的函数
export const setRefreshToken = (REFRESH_TOKEN) => {
    localStorage.setItem('REFRESH_TOKEN', REFRESH_TOKEN)
}
export const getRefreshToken = () =>{
    return localStorage.getItem('REFRESH_TOKEN')
}
export const removeRefreshToken = () => {
    localStorage.removeItem("REFRESH_TOKEN")
}
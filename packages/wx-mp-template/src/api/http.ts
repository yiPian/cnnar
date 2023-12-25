
// 正式服
// const domain = 'https://mini.luyiyun.cn/minimall/'
// 测试服
const domain = 'http://192.168.1.105:8001/v1/'
let CURR_LOCAL_COOKIE = ''
type RequestRest =  {
    data: any,
    status: number,
    msg: string
}
const http = function<T>(method: string, api: string, data: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        // @ts-ignore
        wx.request({
            header: {
                'company': 'FX',
                'user': CURR_LOCAL_COOKIE
            },
            url: domain + api,
            method,
            data,
            success (e: RequestRest) {
                const res = e.data
                if (res.code == 200) {
                    if (res.data && res.data.user) {
                        CURR_LOCAL_COOKIE =  res.data.user
                    }
                    resolve(res.data)
                    // 这里判断下，如果是退出登陆，清空下user
                    if (api === 'loginout') {
                        CURR_LOCAL_COOKIE = ''
                    }
                } else if (res.code == 206) {
                    uni.hideLoading()
                    reject(res.msg || '请求失败请重试')
                    // 'openid登陆，这里不处理'
                } else if (res.code == 500) {
                    uni.showModal({
                        title: '提示',
                        content: res.msg || '请求失败请重试', 
                        showCancel: false
                    })
                    reject(res.msg || '请求失败请重试')
                } else {
                    uni.hideLoading()
                    reject(res.msg || '请求异常')
                }
            },
            fail (e: {errMsg:string}) {
                uni.hideLoading()
                reject(e.errMsg || '网络异常')
            }
        })
    })
}

export function post<T> (api: string, data = {}) {
    return http<T>('POST', api, data)
}

export function get<T> (api: string, data = {}) {
    return http<T>('GET', api, data)
}

export function del<T> (api: string, data = {}) {
    return http<T>('DELETE', api, data)
}

export function put<T> (api: string, data = {}) {
    return http<T>('PUT', api, data)
}

/**
 * 列表接口返回的数据类型
 */
export interface IListType {
    total: number,
    list: any[]
}

import type { IOrder } from '@/api/order'
/**
 * 单据提交前的验证
 */
export function useOrderSubmitVerify(orderData: IOrder, veriPhone = true):boolean {
    if (orderData.hasOwnProperty('customer') ) {
        if (!orderData.customer) {
            uni.showToast({
                title: '请选择客户',
                icon: "error"
            })
            return false
        }
        if (veriPhone && !useIsPhone(orderData.customer.phone)) {
            uni.showToast({
                title: '手机号不正确',
                icon: "error"
            })
            return false
        }
    }
    if (!orderData.products.length) {
        uni.showToast({
            title: '请选择商品',
            icon: "error"
        })
        return false
    }
    // 计算总金额和总数量
    orderData.total_amount = orderData.products.reduce((total, item) => {
        return total + item.amount
    }, 0)
    orderData.total_number = orderData.products.reduce((total, item) => {
        return total + item.number
    }, 0)
    return true
}

export function useOrderProductVerify(orderData: { products: any[] }):boolean {
    if (!orderData.products.length) {
        uni.showToast({
            title: '请选择商品',
            icon: "error"
        })
        return false
    }
    return true
}

export function useIsPhone (val: string) {
    let reg = /^1[0-9]{10}$/ // 手机号正则表达式
    return reg.test(val)
}
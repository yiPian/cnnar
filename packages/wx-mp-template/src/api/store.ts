import { get, post, put, del } from "./http"
import type { ISubmitResult, OrderListItem } from './order'
export interface IBillKind {
    ID: number
    bill_kind_code: string
    bill_kind_type: string
    bill_mark_name: string
    io_store_type: string
}
export interface IBillKindList {
    data: IBillKind[]
}
export interface IProduct {
    bill_date: string
    bill_kind: number
    detail_sys_id: string
    goods_code: string
    goods_id: number
    goods_name: string
    goods_specs: string
    goods_unit: string
    id: number
    item_no: number
    quantity: number
    ref_qty: number
    store_id: number
    unref_qty: number
    remark: string
    
}
export interface IYinYong {
    bill_code: string
    bill_customer: string
    bill_date: string
    bill_id: number
    bill_kind: number
    bill_kind_name: string
    check_name: string
    check_time: string
    id: number
    quantity: number
    ref_qty: number
    remark: string
    store_name: string
    unref_qty: number
    products: IProduct[]
}
export interface IYinYongList {
    data: IYinYong[]
}
/**
 * 引用单据
 * @returns 
 */
export function useBillKindRu<IBillKindList> (): Promise<IBillKindList> {
    return get('billkind?bill_type_from=入库单')
}
export function useBillKindChu<IBillKindList> (): Promise<IBillKindList> {
    return get('billkind?bill_type_from=出库单')
}
/**
 * 入库单的引用单据查询
 * @returns 
 */
export function useRuYinYong<IBillKindList> (params: any): Promise<IBillKindList> {
    return get('ioStoreUnInList', params)
}
export function useChuYinYong<IBillKindList> (params: any): Promise<IBillKindList> {
    return get('ioStoreUnOutList', params)
}
/**
 * 创建入库开单
 * @param params 
 */
export function userRukuKaidanCreate<ISubmitResult>(params: any):Promise<ISubmitResult> {
    return post('ioStore', params)
}

export function userRukuKaidanQuery<OrderListItem>(params: any):Promise<OrderListItem> {
    return get('ioStore', params)
}

export function useRukuKaidanInfo<OrderListItem>(id: number):Promise<OrderListItem> {
    return get('ioStore/' + id)
}
/**
 * 获取组装单中可以组装的货品
 * @param params 
 * @returns 
 */
export function usecombinegoods<OrderListItem>(params: any):Promise<OrderListItem> {
    return get('combinegoods', params)
}

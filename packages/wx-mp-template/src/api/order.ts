import { get, post, put, del } from "./http"
import type { IProduct } from './product'
import type { ICustomer } from '@/api/customer'  


export interface IOrder {
    bill_date: string
    bill_mark: string
    customer: ICustomer|null
    products: IProduct[]
    total_amount: number // 货品的总金额
    total_number: number // 货品的总数量
}

export interface ISaleDetail {
    amount: string
    detail_remark: ""
    detail_remark2: ""
    detail_sysid: string
    goods_code: string
    goods_name: string
    goods_specs: string
    goods_unit: string
    id: number
    item_no: number
    price: string
    quantity: string
    tax_amount: string
    tax_price: ""
    tax_rate: string
    detail_sys_id: string
    ref_qty: string
    remark: string
}

export interface OrderListItem {
    all_amount: number
    all_quantity: number
    appoint_logist: string
    bill_code: string
    bill_date: string
    bill_disc: number
    bill_kind: number
    bill_mark: string
    bill_remark: string
    bill_state: number
    check_time: string
    checkman_id: string
    checkman_name:string
    company_id: string
    create_by: string
    create_na: string
    created_at: string
    credit: number
    debit: number
    dept_code:string
    employee: string
    guest_code: string
    guest_id: number
    guest_name: string
    id: number
    linkman: string
    linkman_tel: string
    logic_del: string
    logic_del_time: string
    logic_del_user: string
    opman_id: string
    opman_name: string
    rec_address: string
    remark: string
    sale_details: ISaleDetail[]
    purchase_details: ISaleDetail[]
    iostore_details: ISaleDetail[]
    sale_type: string
    sflag: string
    ship_type: string
    stop_quote: string
    store_id: 1
    sys_id: string
    update_by: string
    update_na: string
    updated_at: string
    vender_code: string
    vender_name: string
    arrival_date: string
    up_bill_code: string
    ref_bill_name: string
    store_name: string
    qty_sum: string
}

export interface IShiptype {
    ID: string,
    ship_name: string
}
export interface IShiptypeList {
    list: IShiptype[]
    total: number
}

export interface IStore {
    ID: string,
    store_name: string
    store_address: string
}
export interface IStoreList {
    list: IStore[]
    total: number
}
export interface ISubmitResult {
    res?: { ID: number}
}
/**
 * 查询销售开单
 * @param params 
 * @returns 
 */
export function useOrderQuery<OrderListItem>(params: any): Promise<OrderListItem> {
    return get('sale', params)
}
export function useOrderInfo<OrderListItem>(id: number):Promise<OrderListItem> {
    return get('sale/' + id)
}
/**
 * 新增销售开单
 * @param params 
 * @returns 
 */
export function useKaidanCreate<ISubmitResult> (params: any):Promise<ISubmitResult> {
    return post('sale', params)
}
/**
 * 查询销售订单
 * @param params 
 * @returns 
 */
export function useDingdanQuery<OrderListItem> (params: any): Promise<OrderListItem> {
    return get('saleorder', params)
}
export function useDingdanInfo<OrderListItem>(id: number):Promise<OrderListItem> {
    return get('saleorder/' + id)
}
/**
 * 创建销售订单
 * @param params 
 */
export function userDingdanCreate<ISubmitResult>(params: any):Promise<ISubmitResult> {
    return post('saleorder', params)
}
/**
 * 运输方式
 * @returns 
 */
export function useShiptypeQuery<IShiptypeList>(): Promise<IShiptypeList> {
    return get('shiptype')
}
/**
 * 选择仓库
 */
export function useStoreQuery<IStoreList>(): Promise<IStoreList> {
    return get('store')
}

export interface IBillMark {
    ID: number
    created_at: string
    is_use: string
    param_code: string
    param_name: string
    param_style: string
    updated_at: string
}
export interface IBillMarkList {
    data: IBillMark[]
}
/**
 * 单据标记
 * @returns 
 */
export function useBillmark<IBillMarkList> (): Promise<IBillMarkList> {
    return get('billmark')
}
/**
 * 新增采购开单
 * @param params 
 * @returns 
 */
export function useCgKaidanCreate <ISubmitResult> (params: any):Promise<ISubmitResult> {
    return post('purchase', params)
}
/**
 * 获取采购开单列表
 * @param params 
 * @returns 
 */
export function useCgKaidanQuery <OrderListItem> (params: any): Promise<OrderListItem> {
    return get('purchase', params)
}
export function useCgKaidanInfo<OrderListItem>(id: number):Promise<OrderListItem> {
    return get('purchase/' + id)
}

/**
 * 新增采购订单
 * @param params 
 * @returns 
 */
export function useCgDingdanCreate <ISubmitResult> (params: any):Promise<ISubmitResult> {
    return post('purchaseorder', params)
}
/**
 * 获取采购开单列表
 * @param params 
 * @returns 
 */
export function useCgDingdanQuery <OrderListItem> (params: any): Promise<OrderListItem> {
    return get('purchaseorder', params)
}
export function useCgDingdanInfo<OrderListItem>(id: number):Promise<OrderListItem> {
    return get('purchaseorder/' + id)
}

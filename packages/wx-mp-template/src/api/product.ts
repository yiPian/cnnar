import { get, post, put, del } from "./http"

export interface IProduct {
    created_at: string
    updated_at: string
    ID: string|number
    goods_name: string
    goods_short_name: string
    goods_specs: string
    goods_code: string
    goods_weight: number
    goods_brand: number
    goods_renping: string
    goods_vender: string
    goods_unit: string
    sale_price01: number
    sale_price02: string
    cost_type: string
    is_stop: string
    is_sale_server: string
    is_setup: string
    is_sale_online: string
    product_line: string
    applicable_object: string
    goods_remark: string
    goods_type_id: string
    goods_type_name: string
    extend_type: string
    pur_price: string
    goods_rete: string
    goods_head_pic: string
    goods_pics: string
    goods_describe: string
    company_id: string
    create_by: string
    create_na: string
    update_by: string
    update_na: string
    send_to_logist: string
    send_logist_date: string
    qty_low: string
    qty_hight: string
    qty_routine: string
    pur_cycle: string
    goods_length: string
    goods_width: string
    goods_height: string
    goods_volume: string
    number: number
    price: number
    amount: number
    remark: string
}

export interface IProductList {
    list: IProduct[]
    total: number
}

/**
 * 查询商品
 * @param params 
 * @returns 
 */
export function useProductQuery<IProductList>(params: any): Promise<IProductList> {
    return get('goods', params)
}
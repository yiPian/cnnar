import { get, post, put, del } from "./http"

export interface ICustomer {
    ID: string|number
    created_at?: string
    updated_at?: string
    crm_kind?: string
    objr_mark: string
    vender_mark?: string
    code: string
    name: string
    phone: string
    short_name?: string
    guest_address: string
    track_dept?: string
    track_dept_name?: string
    employee_man_name: string
    business_man_name?: string
    company_id?: string
    cooperation?: string
    crm_type?: string
    area_line?: string
}

export interface ICustomerList {
    list: ICustomer[]
    total: number
}
export const DefaultCustomer: ICustomer = {
    ID: '',
    code: '',
    name: '',
    phone: '',
    objr_mark:'',
    employee_man_name: '',
    guest_address: ''
}

/**
 * 查询客户
 * @param params 
 * @returns 
 */
export function useCustomerQuery<ICustomerList>(params: any): Promise<ICustomerList> {
    return get('customer', params)
}
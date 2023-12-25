import type { ComponentInternalInstance } from "vue"

export function useSelect (selecter: string, instance: ComponentInternalInstance|null, isAll = false): Promise<UniApp.NodeInfo> {
    return new Promise(resolve => {
        const query = uni.createSelectorQuery().in(instance)
        let s 
        if (isAll) {
            s = query.selectAll(selecter)
        } else {
            s = query.select(selecter)
        }
        s.boundingClientRect((data) => {
            if (data instanceof Array) {
                resolve(data[0])
            } else {
                resolve(data)
            }
        }).exec()
    })
}


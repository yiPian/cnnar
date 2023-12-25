import { inject } from "vue";
import { SYSTEM_INFO, SystemInfo } from "@/utils/system";
/**
 * 获取注入的 系统信息
 */
export function useSystemInfo () {
    return inject<SystemInfo>(SYSTEM_INFO)
}
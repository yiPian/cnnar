import { provide } from "vue"
import type { InjectionKey } from 'vue'

export const SYSTEM_INFO = Symbol() as InjectionKey<string>

export interface SystemInfo {
    screenWidth: number // 屏幕宽度
    screenHeight: number // 屏幕高度
    statusBarHeight?: number // 状态栏高度
    customTop: number // 微信自带工具栏距离顶部的距离
    customWidth: number // 自带工具栏宽度
    customHeight: number // 自带工具栏高度
    margin: number // 自带工具栏外边距
    useBarWidth: number // 计算除去微信自带按钮的宽带，剩余空间的宽
}

export function initSystemInfo() {
    uni.getSystemInfo({
        success: function(e) {
            const custom = uni.getMenuButtonBoundingClientRect()
            provide<SystemInfo>(SYSTEM_INFO, {
                screenWidth: e.screenWidth,
                screenHeight: e.screenHeight,
                statusBarHeight: e.statusBarHeight,
                customTop: custom.top,
                customWidth: custom.width,
                customHeight: custom.height,
                margin: e.screenWidth - custom.right,
                useBarWidth: custom.left // 计算除去微信自带按钮的宽带，剩余空间的宽
            })
        }
    })
}
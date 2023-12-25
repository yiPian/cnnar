/**
 * 属性修改对应的渲染关系
 */
import { h } from 'vue'
import type { VNode } from 'vue'
import type { TextComponentProps } from './defaultProps'
export interface PropToForm {
    component: string;
    // 组合组件需要的父级组件
    subComponent?: string; 
    // value?: string;
    // 各个组件需要的属性
    extraProps?: { [key: string]: any };
    // 组件属性的名称
    text?: string;
    // 组合组件的选项
    options?: { text: string | VNode; value: any }[];
    // 将元素属性的转换
    initalTransform?: (v: any) => any;
    // 事件转换函数
    afterTransform?: (v: any) => any;
    valueProp?: string;
    eventName?: string;
}

export type PropsToForms = {
    // 遍历文本组件的属性，设置类型
    [p in keyof TextComponentProps]?: PropToForm
}

const fontFamilyArr = [
    { text: '宋体', value: '"SimSUn","STSong"'},
    { text: '黑体', value: '"SimHei","STHeiti"'},
    { text: '楷体', value: '"KaiTi","STKaiti"'},
    { text: '仿宋', value: '"FangSong","STFangsong"'}
]

const fontFamilyOptions = fontFamilyArr.map(font => {
    return {
        value: font.value,
        text: h('span', { style: { fontFamily: font.value }}, font.text)
        // text: <span style={{ fontFamily: font.value }}>{font.text}</span> as VNode
    }
})

export const mapPropsToForms: PropsToForms = {
    text: {
        text: '文本',
        component: 'a-input',
        eventName: 'input',
        // afterTransform: (e: any) => e.target.value
    },
    fontSize: {
        text: '字号',
        component: 'a-input-number',
        initalTransform (val) {
            return parseInt(val)
        },
        afterTransform: (e: number) => e ?  `${e}px` : ''
    },
    lineHeight: {
        text: '行高',
        component: 'a-slider',
        extraProps: {
            min: 0, max: 3, step: 1
        },
        initalTransform: (v: string) => parseFloat(v),
        afterTransform: (e: number) => e.toString()
    },
    textAlign: {
        component: 'a-radio-group',
        subComponent: 'a-radio',
        text: '对齐',
        options: [
            { value: 'left', text: '左'},
            { value: 'center', text: '中'},
            { value: 'right', text: '右'}
        ],
        // afterTransform: (e: any) => e.target.value

    },
    fontFamily: {
        component: 'a-select',
        subComponent: 'a-option',
        text: '字体',
        options: [
            { text: '无', value: '无'},
            ...fontFamilyOptions
        ]
    }
}


export default {}
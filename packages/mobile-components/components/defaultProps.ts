import { mapValues, without } from 'lodash-es'
/**
 * 组件的公共属性
 * --------------
 * 这里的写法是按照教程来的，如果自己弄得花，应该是class的组合，而不是属性的组合
 */
export interface CommonComponentProps {
    // actions
    actionType: string;
    url: string;
    // size
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    // border type
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    // shadow and opacity
    boxShadow: string;
    opacity: string;
    // position and x,y
    position: string;
    left: string;
    top: string;
    right: string;
  }
export const commonDefaultProps:CommonComponentProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '318px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: '1',
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
}

// 文本特有属性
export interface TextComponentProps extends CommonComponentProps {
    text: string;
    fontSize: string|number;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string|number;
    textAlign: string;
    color: string;
    backgroundColor: string;
  }
export const textDefaultProps:TextComponentProps = {
    // basic props  font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps
}

// 转换类型
export const transformToComponentProps = (props: TextComponentProps) => {
    return mapValues(props, (item: any) => {
        return {
            type: item.constructor,
            default: item
        }
    })
}

// 获取Text组件的默认值
export const transformTextdefaultProps = transformToComponentProps(textDefaultProps)
// 将Text组件中，非样式属性剔除
export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
console.log('textStylePropNames', textStylePropNames)
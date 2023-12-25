/**
 * 格式化时间
 * @param date 
 * @param format 
 * @returns 
 */

export function useFormatDate(time: Date | string |number ): string {
    const now = new Date(time)
    // 获取年、月、日等信息
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份从 0 开始，需要加 1
    const date = now.getDate();

    return `${year}-${('0' + month).slice(-2)}-${('0' + date).slice(-2)}`;
}
/*
 * @Description:获取
 * @Autor: ZY
 * @Date: 2020-11-04 10:18:17
 * @LastEditors: ZY
 * @LastEditTime: 2020-11-04 11:49:51
 */
const randomUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export {
  randomUUID
}

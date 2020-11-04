/*
 * @Description:请求头部携带参数
 * @Autor: ZY
 * @Date: 2020-11-04 10:17:07
 * @LastEditors: ZY
 * @LastEditTime: 2020-11-04 16:22:55
 */

import { randomUUID } from './uuid'
import storage, { StorageType } from './storage'
import { APPKeys } from '@/config/constant/keys'

const _header = {
  requestId: randomUUID(),
  tmpTokenId: randomUUID(),
  terminalVersion: '1.0.0',
  terminalType: 'browser',
  siteId: '15'
}

export default () => {
  const oppcSessionId = storage.rcGetItem(StorageType.session, APPKeys.OPPC_SESSIONID)
  return Object.assign(_header, {
    oppcSessionId
  })
}

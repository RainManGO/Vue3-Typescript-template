/*
 * @Description:AES加密
 * @Autor: ZY
 * @Date: 2020-11-04 13:33:44
 * @LastEditors: ZY
 * @LastEditTime: 2020-11-04 15:21:38
 */
import { AES, mode, pad } from 'crypto-ts'
import { APPKeys } from '@/config/constant/keys'

export default class RCAES {
  static encrypt(text: string | null): string | null{
    return AES.encrypt(text ?? '', APPKeys.ASE_KEY, { mode: mode.ECB, padding: pad.PKCS7 }).toString()
  }

  static decrypt(text: string | null): string | null{
    return AES.decrypt(text ?? '', APPKeys.ASE_KEY, { mode: mode.ECB, padding: pad.PKCS7 }).toString()
  }
}

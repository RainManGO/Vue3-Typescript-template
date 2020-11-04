/*
 * @Description:全局存储类封装（AES加解密）
 * @Autor: ZY
 * @Date: 2020-11-04 11:51:01
 * @LastEditors: ZY
 * @LastEditTime: 2020-11-04 16:22:17
 */

import RCAES from './ase'

export enum StorageType{
    local,
    session
}

interface RCYJStorage{
    rcSetItem<T>(type: StorageType, key: string, value: T): void
    rcGetItem<T>(type: StorageType, key: string): string | null
    rcRemoveItem(type: StorageType, key: string): void
 }

class RCStorage implements RCYJStorage {
  private static instance: RCStorage
  static shared() {
    if (!this.instance) {
      this.instance = new RCStorage()
    }
    return this.instance
  }

  /**
   * @description: 本地保存数据AES加密处理
   * @param {StorageType} type localStorage 和 sessionStorage 选择
   * @param {string} key
   * @param {T} value
   * @return {*}
   */
  rcSetItem<T>(type: StorageType = StorageType.local, key: string, value: T) {
    const valueJson = JSON.stringify(value)
    const valueAes = RCAES.encrypt(valueJson) as string
    if (type === StorageType.local) {
      localStorage.setItem(key, valueAes)
    } else {
      sessionStorage.setItem(key, valueAes)
    }
  }

  rcGetItem(type: StorageType = StorageType.local, key: string): string | null {
    if (type === StorageType.local) {
      return RCAES.decrypt(localStorage.getItem(key))
    } else {
      return RCAES.decrypt(sessionStorage.getItem(key))
    }
  }

  rcRemoveItem(type: StorageType = StorageType.local, key: string) {
    if (type === StorageType.local) {
      return localStorage.removeItem(key)
    } else {
      return sessionStorage.removeItem(key)
    }
  }
}

export default RCStorage.shared()

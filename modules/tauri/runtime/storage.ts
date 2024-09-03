import { createStorage } from 'unstorage'

const storage = createStorage()
storage.mount('servers', {
  getKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i) as string)
    }
    return keys
  },
  removeItem(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    return localStorage.clear()
  },
  hasItem(key: string) {
    return !!localStorage.getItem(key)
  },
  setItem(key: string, value: any) {
    return localStorage.setItem(key, value)
  },
  getItem(key: string) {
    return localStorage.getItem(key)
  },
})

export function useStorage() {
  return storage
}

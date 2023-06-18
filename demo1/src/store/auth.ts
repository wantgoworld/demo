import { defineStore } from 'pinia'

const initData = {
  access: '',
}
export type AuthData = typeof initData
export type AuthRes = { accessToken: string; refreshToken: string }

export const authStore = defineStore('auth', {
  state: () => ({ ...initData }),
  actions: {
    updateAuth(token?: AuthRes) {
      console.log('updateAuth')
      this.access = token?.accessToken ?? initData.access
    },
  },
  // persist: true,
})

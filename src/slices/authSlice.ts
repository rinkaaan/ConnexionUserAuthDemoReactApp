import Cookies from 'js-cookie'
import type { User } from '../openapi-client'
import { OpenAPI, UserService } from '../openapi-client'

interface AuthState {
  isAuthenticated: boolean
  user?: User
  setToken(token: string): Promise<void>
  logout(): Promise<void>
  init(): Promise<void>
}

const token = Cookies.get('token')
OpenAPI.TOKEN = token

export const authSlice: AuthState = {
  isAuthenticated: token != null,
  async setToken(token: string) {
    Cookies.set('token', token)
    OpenAPI.TOKEN = token
    authSlice.isAuthenticated = true
    this.user = await UserService.get()
  },
  async logout() {
    Cookies.remove('token')
    OpenAPI.TOKEN = undefined
    authSlice.isAuthenticated = false
    authSlice.user = undefined
  },
  async init() {
      if (!authSlice.isAuthenticated) return
      try {
        authSlice.user = await UserService.get()
      } catch (e) {
        await this.logout()
      }
  }
}

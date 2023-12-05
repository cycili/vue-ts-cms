import ccRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum loginAPI {
  AccountLogin = '/login',
  loginUserInfo = '/users/',
  UserMenus = '/role'
}
export function accountLoginRequest(account: IAccount) {
  return ccRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return ccRequest.get<IDataType>({
    url: loginAPI.loginUserInfo + id
    // data: account
  })
}

export function requestUserMenusByRoleId(id: number) {
  return ccRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu'
  })
}

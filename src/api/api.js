/**
 * 模块接口列表
 */

import axios from '@/api/axios'; 
import QS from 'qs'; 
import base from './base'; 

// export const Login = (params) => {
//   return axios.post(`${base.loca}/auth/login/`, QS.stringify(params))
// }

export const getQuickEntryData = (params) => {
  return axios.get(`${base}/quickEntry`, {params: params})
}
export const getSystemhelpData = (params) => {
  return axios.get(`${base}/api/systemhelp`, {params: params})
}
export const getMarketListData = (params) => {
  return axios.get(`${base}/marketList`, {params: params})
}
/** 
 * api接口的统一出口
 */
// 列表模块接口
import { getQuickEntryData, getSystemhelpData, getMarketListData } from '@/api/api';
// 其他模块的接口……

// 导出接口
export default {
  getQuickEntryData,
  getSystemhelpData,
  getMarketListData
}
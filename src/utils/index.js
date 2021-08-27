export {
  dateFormat,
  formatDate,
  getNowFormatDate,
  randomNum,
  parseQueryString,
  randomColor,
  setStorage,
  getStorage,
  clearStorage,
  isNot,
  toFixed,
  MONEYFORMATTER,
  // findParent,
}
/**
* 日期格式化
*/
function dateFormat(date, format) {
  format = format || 'yyyy-MM-dd hh:mm:ss';
  if (date !== 'Invalid Date') {
    let o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length === 1 ? o[k] :
            ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }
  return '';
}

/**
* @desc 格式化时间
*/
function formatDate(date) {
  date = new Date(date);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var m1 = date.getMinutes();
  var s = date.getSeconds();
  m = m < 10 ? ("0" + m) : m;
  d = d < 10 ? ("0" + d) : d;
  return y + "-" + m + "-" + d + " " + h + ":" + m1 + ":" + s;
}
/**
* @desc 获取当前时间
*/
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = '/';
  var seperator2 = ':';
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
    " " + date.getHours() + seperator2 + date.getMinutes() +
    seperator2 + date.getSeconds();
  return currentdate;
}

/**
* 
* @desc 生成指定范围随机数
* @param  {Number} min 
* @param  {Number} max 
* @return {Number} 
*/
function randomNum(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

/**
* 
* @desc   url参数转对象
* @param  {String} url  default: window.location.href
* @return {Object} 
*/
function parseQueryString(url) {
  url = url == null ? window.location.href : url
  var search = url.substring(url.lastIndexOf('?') + 1)
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

/**
* 
* @desc 随机生成颜色
* @return {String} 
*/
function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
* 设置  本地缓存
*/
function setStorage(key, obj) {
  if (typeof obj === 'string') {
    localStorage.setItem(key, obj);
  } else {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}

/**
* 获取
*/
function getStorage(key) {
  let val = localStorage.getItem(key);
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
}

/**
* 删除， 如果不传值，删除所有
*/
function clearStorage(key) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
}

// 判断是否是 null, '', undefined
function isNot(val) {
  if (val === null || val === '' || val === undefined) {
    return true;
  } else {
    return false;
  }
}

/**
* @desc 保留n位小数
*/
function toFixed(val, num) {
  val = parseFloat(val);
  if (val) {
    val = parseFloat(val.toFixed(num || 1));
  } else {
    val = 0;
  }
  return val;
}

/**
* @desc 保留n位小数, 千分位格式化
*/
function MONEYFORMATTER(number, decimals, dec_point, thousands_sep) {
  /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * dec_point：小数点符号
   * thousands_sep：千分位符号
   * */
  if (number != null) {
    if (number.toString().indexOf(".") == -1) {
      decimals = 0;
    }
    var num = new Number(number)
    var toMmoney = num.toFixed(decimals).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return toMmoney;
  }
}

/**
* 递归寻找子类的父类
*/

// export const findParent = (menu, id) => {
//   for (let i = 0; i < menu.length; i++) {
//     if (menu[i].children.length != 0) {
//       for (let j = 0; j < menu[i].children.length; j++) {
//         if (menu[i].children[j].id == id) {
//           return menu[i];
//         } else {
//           if (menu[i].children[j].children.length != 0) {
//             return findParent(menu[i].children[j].children, id);
//           }
//         }
//       }
//     }
//   }
// };


/**
 * 总分98；
 * 密码长度( 一个字符一分， 最大 25分)；
 * 字母 (0 分: 没有字母; 10-20分: 增加1 个数字 加一分 )
 * 符号 (0 分: 没有符号; 10 分: 1 个符号; 25 分： 大于1 个符号)
 * 数字（ 0 分: 10-20分: 增加1 个数字 加一分）
 * 奖励(小写、大写、数字、符号 2种 2分， 3种5分， 4种:8分)
 */

/**
 * 获取总长度
 * @param str
 * @returns {*}
 */
let getStrLength = function(str) {
  return str.length;
};

/**
 * 获取 大写长度
 * @param str
 * @returns {*}
 */
let getUpperCaseLength = function(str) {
  return str.replace(/[^A-Z]/g, '').length;
};

/**
 * 获取小写长度
 * @param str
 * @returns {*}
 */
let getLowerCaseLength = function(str) {
  return str.replace(/[^a-z]/g, '').length;
};

/**
 * 获取数字长度
 * @param str
 * @returns {*}
 */
let getNumberLength = function(str) {
  return str.replace(/[^0-9]/g, '').length;
};

/**
 * 长度分
 * @param len
 * @returns {number}
 */
let lenScore = function(len) {
  return Math.min(len, 25);
};

/**
 * 符号分数
 * @param len
 * @returns {number}
 */
let abnormalCharLenScore = function(len) {
  if (len === 0) return 0;
  else if (len < 2) return 10;
  else return 25;
};

/**
 * 一般字符分数
 * @param len
 * @returns {number}
 */
let normalCharLenScore = function(len) {
  if (len === 0) return 0;
  return Math.min(len + 10, 20);
};

/**
 * 奖励分
 * @param len
 * @returns {number}
 */
let awardScore = function(len) {
  if (len < 2) return 0;
  else if (len === 2) return 2;
  else if (len === 3) return 5;
  else return 8;
};

/**
 * 安全级别分值
 * @param str
 * @returns {*}
 */
export function getSecurityScore(str) {
  let strL = getStrLength(str);
  let upperCaseL = getUpperCaseLength(str);
  let lowerCaseL = getLowerCaseLength(str);
  let numberL = getNumberLength(str);
  let abnormalCharLen = strL - upperCaseL - lowerCaseL - numberL;
  let scoreLength = [upperCaseL, lowerCaseL, numberL, abnormalCharLen].filter(i => i > 0).length;
  return (
    lenScore(strL) +
    abnormalCharLenScore(abnormalCharLen) +
    awardScore(scoreLength) +
    normalCharLenScore(numberL) +
    normalCharLenScore(lowerCaseL + upperCaseL)
  );
}

/**
 * 安全级别
 * @param num
 * @returns {*}
 */
export function getSecurityLevel(num) {
  if (num < 40) return { value: 'weak', text: '低' };
  else if (num < 80) return { value: 'medium', text: '中等' };
  else return { value: 'strong', text: '高' };
}

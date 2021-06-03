/*
 * regular expression validation
 * you can use this form-validation for this project,as an extension script.
 * created: 2021/6/3.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2021 Broccoli spring( gcx )
 */
import utils from '../index';
import rulesInfo from './rules-config';

/**
 * validate rule private
 * @param val
 * @param type          rule type
 * @param ruleInfo      rule information list
 * @returns {*}
 */
export default function validateRule(val, type, ruleInfo) {
  let info = {};
  //if ruleInfo exists, use it directly, otherwise, you need to get the ruleInfo value (search form rules-info).
  if (ruleInfo) {
    info = ruleInfo;
  } else {
    //search from rules-information list
    for (let rule of rulesInfo) {
      if (rule.type === type) {
        info = rule;
        break;
      }
    }
  }
  const REG = info.ruleReg; //reg rule
  const warmPrompt = info.warmPrompt; //warm prompt message
  // console.log(REG);
  /*---------------------
  complex ? = >
      judge is fun?
                  Yes => 1、run _complexValidate method
                  No  => 2、return true
  simple ? = >  validata value base on reg rule
  -----------------------*/
  let ruleStatus = info.complex
    ? utils.judgeType(REG) === 'function'
      ? REG(val, info)
      : true
    : REG.test(val);
  //throw resault to validate-check
  return ruleStatus;
}

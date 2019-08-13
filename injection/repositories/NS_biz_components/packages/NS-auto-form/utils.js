import utils from '@NEAP/utils';

/**
 * convert width / height - units
 * @param val
 * @param type
 * @param base
 * @returns {*}
 */
export const convertUnits = (val, type, base) => {
  if (val || val === 0) {
    if (utils.judgeType(val) === 'number') {
      return val + 'px';
    } else if (utils.judgeType(val) === 'string') {
      return val;
    } else {
      throw 'the value of the units must be string or number format ，you better find it';
    }
  } else {
    if (type) {
      if (base) {
        return base;
      } else {
        return type === 'width' ? '100%' : null;
      }
    } else {
      throw 'in function of \'convertUnits\', you should set type-value to tell this function ' +
      'which style ( width / height ) you went to set value.';
    }
  }
};

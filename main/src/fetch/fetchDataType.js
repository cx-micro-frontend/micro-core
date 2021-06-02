/*
 * Type of data handle for axios-api
 * You can use those fun in help js
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */

/*==========================================================================================================================*/
export function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}

/**
 * filter query is null
 * @param query
 * @returns {*}
 */
export function filterNull(query) {
  if (typeof query === 'Object') {
    for (let key in query) {
      if (query[key] === null) {
        delete query[key];
      }
      if (toType(query[key]) === 'string') {
        query[key] = query[key].trim();
      } else if (toType(query[key]) === 'object') {
        query[key] = filterNull(query[key]);
      } else if (toType(query[key]) === 'array') {
        query[key] = filterNull(query[key]);
      }
    }
    return query;
  } else {
    return false;
  }
}

/**
 * data filter
 * @param query
 * @returns {*}
 */
export function dataFilter(query) {
  if (query) {
    return filterNull(query);
  } else {
    return {};
  }
}

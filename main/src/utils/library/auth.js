import Cookies from 'js-cookie';

const TokenKey = 'app-token';
const IDKey = 'app-id';

export const getToken = () => {
  return Cookies.get(TokenKey);
};

export const setToken = token => {
  Cookies.set(TokenKey, token);
};

export const removeToken = (edgetoken = ['token', '__jwt_token_']) => {
  /*
   * only remove app-token
   */
  if (!edgetoken || edgetoken.length) {
    Cookies.remove(TokenKey);
  }

  /*
   * remove app-token and other token
   */
  [TokenKey, ...edgetoken].forEach(key => {
    Cookies.remove(key);
  });
};

export const setUserId = id => {
  Cookies.set(IDKey, id);
};

export const getUserId = () => {
  return Cookies.get(IDKey);
};

export const removeUserId = () => {
  Cookies.remove(IDKey);
};
// export function userBehaviorKey() {
//   return `NS_user_behavior_${getUserId()}`;
// }

import Cookies from 'js-cookie';

const TokenKey = 'app-token';

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
  if (!edgetoken || edgetoken.length) Cookies.remove(TokenKey);

  /*
   * remove app-token and other token
   */
  [TokenKey, ...edgetoken].forEach(key => {
    Cookies.remove(key);
  });
};

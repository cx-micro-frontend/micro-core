import fetch from '@FETCH/fetch';
import { dataFilter } from '@FETCH/fetchDataType';

/**
 * update theme color 之前的，保留
 */
export const updateThemeColor = query => {
  //fetch out
  dataFilter(query);
  return fetch({
    url: '/system/user/update-themeColor',
    method: 'post',
    params: query,
  });
};

/**
 * update user theme - （主题色/侧边栏主题/侧边栏状态/是否通栏)
 * 更新以下内容：
 * themeColor: 主题色
 * bannerCover: 是否通栏显示
 * sideMenuTheme: 侧边栏 主题色 - bright / dark
 * SideMenuCollapse: 当前的侧边栏 伸缩 状态
 */
export const updateUserTheme = query => {
  //fetch out
  dataFilter(query);
  return fetch({
    url: '/system/user/updateUserTheme',
    method: 'post',
    params: query,
  });
};

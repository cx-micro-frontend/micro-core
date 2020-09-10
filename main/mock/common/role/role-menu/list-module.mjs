//多模块多菜单 - 导航数据
import multiple_module_nav_menu from './data/multiple_module_nav_menu';

//单模块多菜单 - 导航数据
import single_module_nav_menu from './data/single_module_nav_menu';

const navData = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: single_module_nav_menu,
  });
};


module.exports = {
  'POST /system/permission/list-module': navData,
};



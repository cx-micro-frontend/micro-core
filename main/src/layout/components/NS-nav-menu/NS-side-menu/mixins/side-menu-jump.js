import keyRefer from '../../nav-menu-keyRefer';
// import { modules } from '../../../../../../dependencies';
import routefiles from '../../../../../../../injection/config/routefiles';
import menuNodeProps from '../../utils/menuNodeProps';

export default {
  data() {
    return {
      isMoreInfo: false,
    };
  },
  methods: {
    /**
     * menu data check before route jump
     * @returns {boolean}
     */
    jumpCheck() {
      const routeName = this.currentNode[keyRefer['routeName']];
      const routePath = this.currentNode[keyRefer['routePath']];
      const templatePath = this.currentNode[keyRefer['templatePath']];
      const hasRouteName = !routePath.indexOf('neap_error__routeName') > -1;
      const hasRoutePath = !routePath.indexOf('neap_error__routePath') > -1;
      const hasViewTemplate =
        menuNodeProps.isInjectPage(this.currentNode) ||
        (routefiles && routefiles.some(m => m.name === routeName));

      return {
        checkResult: hasRouteName && hasRoutePath && Boolean(templatePath) && hasViewTemplate,
        routeName,
        hasRouteName,
        routePath,
        hasRoutePath,
        templatePath,
        hasViewTemplate,
      };
    },

    /**
     * judege and router jump
     */
    judgeAndJump() {
      console.log('侧边栏跳转中：');

      const isLeaf = this.currentNode[keyRefer['isLeaf']];
      const routeName = this.currentNode[keyRefer['routeName']];

      //非叶子节点不能点击跳转路由
      if (!this.currentNode || !isLeaf) return;

      // 剔除侧滑情况
      if (menuNodeProps.isSlipPage(this.currentNode)) return;

      // 非当前页点击
      if (this.currentRoute.name !== routeName) {
        const res = this.jumpCheck();

        console.log('侧边栏跳转-路由信息校验结果：');
        console.log(res);

        //校验成功后
        if (res.checkResult) {
          //菜单栏 - 跳转目标页面并清除目标页的缓存
          this.$router.push({
            name: routeName,
            params: { noRefresh: false, jumpMode: 'sideMenu' },
          }); //jump
        } else {
          // 报错通知提示
          const h = this.$createElement;
          this.$notify({
            type: 'error',
            customClass: 'routeCheck-notification',
            duration: 3000,
            onClose: $event => {
              this.isMoreInfo = false;
            },
            message: h('div', {}, [
              h('i', { style: 'color: #505367' }, ['路由配置信息错误，请联系管理员']),
              h(
                'span',
                {
                  style: 'color: teal;display:block',
                  on: {
                    click: $event => {
                      this.isMoreInfo = true;
                      alert(this.isMoreInfo);
                    },
                  },
                },
                '【详细信息】'
              ),
              h(
                'i',
                { style: 'color: #505367;display:block' },
                `${res.hasRouteName ? '' : '目标路由-路由名称缺失'}`
              ),
              h(
                'i',
                { style: 'color: #505367;display:block' },
                `${res.hasRoutePath ? '' : '目标路由-路由路径缺失'}`
              ),
              h(
                'i',
                { style: 'color: #505367;display:block' },
                `${res.templatePath ? '' : '目标路由-模板路径缺失'}`
              ),
              h(
                'i',
                { style: 'color: #505367;display:block' },
                `${res.hasViewTemplate ? '' : '目标路由-模板页面缺失'}`
              ),
            ]),
          });
        }
      }
    },
  },
};

import { mapGetters } from 'vuex';
// --themeColor
export default {
  computed: {
    ...mapGetters(['themeColor', 'sideMenuTheme', 'userTheme']),

    menuPalette() {
      return {
        dark: {
          backgroundColor: '#1A1C38', //导航栏背景色
          backgroundColorHover: 'rgba(255, 255, 255, .1)', //导航栏背景色 - 鼠标移入
          textColor: '#B8BACF', //导航栏文字颜色
          activeTextColor: '#ffffff', //导航栏文字颜色 - 选中
          activeBackgroundColor: this.themeColor, //导航栏背景色 - 选中
          groupTitle: '#ffffff', //二级菜单头部标题
        },
        bright: {
          backgroundColor: '#ffffff', //导航栏背景色
          backgroundColorHover: 'rgba(0, 0, 0, .1)', //导航栏背景色 - 鼠标移入
          textColor: '#757893', //导航栏文字颜色
          activeTextColor: '#fff', //导航栏文字颜色 - 选中
          activeBackgroundColor: this.themeColor, //导航栏背景色 - 选中
          groupTitle: '#636780', //二级菜单头部标题
        },
      };
    },
    themeStyle() {
      return this.menuPalette[this.sideMenuTheme];
    },
  },
};

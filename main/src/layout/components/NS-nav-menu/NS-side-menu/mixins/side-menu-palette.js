import { mapGetters } from 'vuex';
// --themeColor
export default {
  computed: {
    ...mapGetters(['userinfo', 'sideMenuTheme']),
    themeColor() {
      return this.userinfo.themeColor;
    },
    menuPalette() {
      return {
        dark: {
          backgroundColor: '#1A1C38', //导航栏背景色
          backgroundColorHover: 'rgba(255, 255, 255, .1)', //导航栏背景色 - 鼠标移入
          textColor: '#B8BACF', //导航栏文字颜色
          activeTextColor: '#ffffff', //导航栏文字颜色 - 选中
          activeBackgroundColor: this.themeColor, //导航栏背景色 - 选中
          groupTitle: '#ffffff',
        },
        bright: {
          backgroundColor: '#ffffff', //导航栏背景色
          backgroundColorHover: '#EAEAED',
          textColor: '#757893',
          activeTextColor: '#ffffff',
          groupTitle: '#636780',
        },
      };
    },
    themeStyle() {
      return this.menuPalette[this.sideMenuTheme];
    },
  },
};

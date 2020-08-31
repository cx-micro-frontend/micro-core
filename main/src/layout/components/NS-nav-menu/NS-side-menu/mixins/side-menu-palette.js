import { mapGetters } from 'vuex';

const menuPalette = {
  dark: {
    backgroundColor: '#1A1C38',
    backgroundColorHover: 'rgba(255, 255, 255, .1)',
    textColor: '#9094B5',
    groupTitle: '#ffffff',
  },
  bright: {
    backgroundColor: '#ffffff',
    backgroundColorHover: '#EAEAED',
    textColor: '#757893',
    groupTitle: '#636780',
  },
};

export default {
  computed: {
    ...mapGetters(['sideMenuTheme']),
    themeStyle() {
      return menuPalette[this.sideMenuTheme];
    },
  },
};

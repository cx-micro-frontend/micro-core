import { mapGetters } from 'vuex';
import errorMessage from '../../../locales/zh-CN/error-page';
import img_404 from '../../../assets/img/404/404.png';
import img_page_error from '../../../assets/img/sso/page-error@2x.png';

export default {
  data() {
    return {
      img_404,
      img_page_error,
    };
  },
  computed: {
    ...mapGetters(['loginMode', 'routeErrorSign']),
    localeskey() {
      return `${this.loginMode}.${this.routeErrorSign}`;
    },
    maintit() {
      return errorMessage[`${this.localeskey}.main`];
    },
    subtit() {
      return errorMessage[`${this.localeskey}.sub`];
    },
  },
};

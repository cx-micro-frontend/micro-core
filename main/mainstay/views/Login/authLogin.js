import {getUrlParam} from '../../utils';


export default {
  data() {
    return {
      initPath: '/dashboard',
      submitLoading: false,
    };
  },
  methods: {
    //登录
    authLogin(query) {

      this.$store.dispatch('emptyStorage');//empty

      this.$store.dispatch('oauthlogin', query).then(() => {

        this.submitLoading = false;

        this.getMenuAndJump();

      }, (error) => {
        this.submitLoading = false;
        console.log('登录失败', error);
        this.$message.error('登录失败。');

      });
    },

    //多企业登录
    multipleAuthLogin(query) {

      this.$store.dispatch('emptyStorage');//empty

      this.$store.dispatch('multipleEnterpriseLogin', query).then((res) => {

        this.getMenuAndJump();
      }).catch((err) => {
        this.$message.error('登录失败。');
      });
    },

    //单点登录
    ssoLogin(query) {

      this.$store.dispatch('emptyStorage');//empty

      this.$store.dispatch('ssoLogin', query)
        .then((res) => {
          this.initPath = getUrlParam('referRoute');
          this.getMenuAndJump();
        })
        //单点登录跳转失败后的回调
        .catch(() => {

          this.$router.push({path: '/sso/404'});

          // const referPath = getUrlParam('referPath');
          // if (referPath) {
          //   location.href = '//' + referPath;
          // }
          // else {
          //   this.$router.push({ path: '/sso/404' });
          // }

        });
    },

    //菜单获取不出来 正常跳转404页面， 单点登录 跳转登录页面
    getMenuAndJump() {
      //get side bar data
      this.$store.dispatch('generateSideBar').then(list => {
        console.log('获取到菜单栏数据');
        console.log(list);
        this.$router.push({path: list.length > 0 ? this.initPath : '/404'});
      });
    },
  },
};

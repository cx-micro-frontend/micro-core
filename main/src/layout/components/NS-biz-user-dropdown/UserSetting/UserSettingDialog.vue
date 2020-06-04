<template>
  <ns-dialog
    class="userSettingDialog"
    :visible.sync="showDialog"
    title="个人设置"
    @close="closeDialog"
  >
    <!--权限按钮区-->
    <template slot="footer">
      <ns-button size="small" @click="showDialog = false">返 回</ns-button>
    </template>

    <!--主要内容区-->
    <!--<template slot="body">-->
      <div class="module-section">
        <!--用户头像更改-->
        <div class="setting-block-content header-line">
          <div class="line-left">
            <div class="userAvatar">
              <img :src="userAvatar" alt="user-avatar">
            </div>

            <div style="width: 120px; text-align: center">
              <ns-button type="text" @click="showUpdateAvatarDialog = true">修改头像</ns-button>
            </div>
          </div>

          <div class="line-right header-line__value">
            <div>登录账号：<span>{{userinfo.userAccount}}</span></div>

            <div>登录名称：<span>{{userinfo.userName}}</span></div>

            <!--<div>性别：<span>{{userInformation.userSex}}</span></div>-->
          </div>
        </div>
      </div>

      <div class="module-section">

        <!--账号安全级别-->
        <div class="setting-block">
          <div class="setting-block-content">
            <div class="line-left">账号安全级别</div>
            <div class="line-right safeLevelBar clear">
              <!--评级条目-->
              <ns-progress class="level__bar fl" :show-text="false" :stroke-width="20" :percentage="securityScore"
                           :color="customColorMethod"></ns-progress>

              <div class="level__text fl">
                安全级别：
                <span :style="{color: customColorMethod(securityScore)}">{{ securityLevel }}</span>
              </div>
            </div>
          </div>
        </div>

        <!--用户密码修改-->
        <div class="setting-block">

          <div class="setting-block-content">
            <div class="line-left">登录密码</div>
            <div class="line-right">安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码。</div>
            <div class="line-operation checked">
              <i class="el-icon-circle-check-outline"></i>
              <span>已设置</span>
              <ns-button type="text" @click="showModifyPassword = !showModifyPassword">
                {{showModifyPassword?'收起':'修改'}}
              </ns-button>
            </div>
          </div>

          <!--修改密码表单区域-->
          <el-collapse-transition>
            <div v-show="showModifyPassword">
              <modify-password-form @cancel="showModifyPassword = false" @submitSuccess="showModifyPassword = false"></modify-password-form>
            </div>
          </el-collapse-transition>

        </div>
        <!--用户手机修改-->
        <div class="setting-block">
          <div class="setting-block-content">
            <div class="line-left">手机绑定</div>
            <div class="line-right">您的手机为安全手机，可以找回密码，但不能用于登录</div>
            <div class="line-operation unchecked">
              <i class="el-icon-warning"></i>
              <span>未设置</span>
              <ns-button type="text" @click="setMobile">设置</ns-button>
            </div>
          </div>
        </div>


      </div>

      <!--修改头像弹窗-->
      <update-avatar-dialog :visible.sync="showUpdateAvatarDialog" @updateAvatar="updateAvatar"></update-avatar-dialog>
    <!--</template>-->
  </ns-dialog>
</template>

<script>
  import updateAvatarDialog from './components/updateAvatarDialog';
  import modifyPasswordForm from './components/modifyPasswordForm';
  import { mapGetters } from 'vuex';
  import { getSecurityLevel, getSecurityScore } from '../../../../utils/library/securitylevel';
  import { getUserInfo } from '../../../../service/System/User/userSetting';

  export default {
    name: 'userSettingDialog',

    components: { updateAvatarDialog, modifyPasswordForm },

    props: {
      visible: { type: Boolean, default: false },
    },

    data() {
      return {
        showDialog: false,
        showUpdateAvatarDialog: false,//修改头像弹窗开关
        showModifyPassword: false,//修改密码 开关
        userInformation: {},//用户信息
      };
    },

    watch: {
      visible: {
        handler: function(newVal, oldVal) {
          this.showDialog = newVal;
        },
        immediate: true,
      },
    },

    computed: {
      ...mapGetters(['userinfo']),

      userAvatar: function() {
        return this.userInformation.avatar || require('../../../../assets/img/empty/empty-avatar.png');
      },
      //获取生成安全级别分值
      securityScore: function() {
        return getSecurityScore(this.userInformation.userPassword || '');
      },

      //安全级别 （低，中，高)
      securityLevel: function() {
        return getSecurityLevel(this.securityScore || 0).text;
      },
    },

    methods: {
      /**
       * 请求获取用户信息
       */
      getUserInfo() {
        getUserInfo({ userId: this.userinfo.userId }).then((res) => {
          console.log(res.resultData);
          this.userInformation = res.resultData;
        });

      },

      updateAvatar(url) {
        this.userInformation.avatar = url;
      },

      setMobile() {
        this.$message({ message: '暂未开通此功能', type: 'warning' });
      },

      /**
       * 安全级别颜色
       * @param percentage
       * @returns {*}
       */
      customColorMethod(percentage) {
        let level = getSecurityLevel(percentage);
        let colorMap = {
          'weak': '#d9534f',
          'medium': '#f0ad4e',
          'strong': '#5cb85c',
        };
        return colorMap[level.value];
      },
      /**
       * 关闭弹窗
       */
      closeDialog() {
        this.showDialog = false;
        this.$emit('update:visible', false);
      },
    },

    mounted() {
      this.getUserInfo();//请求获取用户信息
    },


  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "UserSettingDialog";
</style>

<template>
  <div class="modify-password-form">
    <ns-form ref="modifyPasswordForm" :model="modifyPasswordModel" label-width="140px" :rules="rules">

      <ns-form-item prop="oldPassword" label="原密码">
        <ns-input type="password" v-model.trim="modifyPasswordModel.oldPassword" placeholder="请输入原密码"></ns-input>
      </ns-form-item>

      <ns-form-item prop="newPassword" label="新密码">
        <ns-input type="password" v-model.trim="modifyPasswordModel.newPassword"
                  placeholder="请输入6-15位英文和数字混合密码"></ns-input>
      </ns-form-item>

      <ns-form-item prop="repeatPassword" label="确认密码">
        <ns-input type="password" v-model.trim="modifyPasswordModel.repeatPassword"
                  placeholder="请输入6-15位英文和数字混合密码"></ns-input>
      </ns-form-item>

    </ns-form>
    <div class="submit__btns">
      <ns-button type="primary" @click="submit"> 确定</ns-button>
      <ns-button @click="formCancel"> 取消</ns-button>
    </div>
  </div>
</template>

<script>
  import { updatePassword } from '../../../../../service/System/User/userSetting';
  import cryptoPassWord from '../../../../../mixins/Login/cryptoPassWord'

  export default {
    name: 'modifyPasswordForm',

    mixins: [cryptoPassWord],

    data() {
      /**
       * 验证输入密码
       * @param rule
       * @param value
       * @param callback
       */
      const validatePassword = (rule, value, callback) => {
        if (value) {
          let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入6-15位英文和数字混合密码'));
          }
          else {
            if (this.modifyPasswordModel.newPassword && this.modifyPasswordModel.repeatPassword) {
              this.$refs.modifyPasswordForm.$refs['ns-form'].validateField('repeatPassword');
            }
            callback();
          }
        }
      };

      /**
       * 验证重复输入密码
       * @param rule
       * @param value
       * @param callback
       */
      const repeatPasswordValidate = (rule, value, callback) => {
        if (value !== this.modifyPasswordModel.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        modifyPasswordModel: {
          oldPassword: '',
          newPassword: '',
          repeatPassword: '',
        },

        //表单规则
        rules: {
          oldPassword: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
          newPassword: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { validator: validatePassword, trigger: 'blur' },
          ],
          repeatPassword: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: repeatPasswordValidate, trigger: 'blur' },
          ],
        },
      };
    },

    methods: {
      submit() {
        this.$refs.modifyPasswordForm.validate((valid) => {
          if (valid) {
            let { newPassword, oldPassword } = this.modifyPasswordModel;
            updatePassword({
              newPassword: this.getCryptoBybase64(newPassword),
              password: this.getCryptoBybase64(oldPassword),
            }).then(() => {
              this.$refs.modifyPasswordForm.resetFields();
              this.$message.success('更改密码成功');
              this.$emit('submitSuccess');
            });
          }
        });
      },

      /**
       * 表单取消
       */
      formCancel() {
        this.$emit('cancel');
        this.$refs.modifyPasswordForm.resetFields();
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .modify-password-form .submit__btns {
    padding: 20px;
    margin-left: 140px;
  }
</style>

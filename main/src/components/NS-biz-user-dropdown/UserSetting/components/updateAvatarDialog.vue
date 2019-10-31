<template>
  <ns-dialog
    class="update-Avatar__dialog"
    :visible.sync="showDialog"
    width="650px"
    title="修改头像"
    autoHeight
    @close="dialogClose"
  >
    <ns-tabs v-model="tabModel">
      <ns-tab-pane label="个性头像编辑" name="personality">
        <div class="decs">从个性头像库里选择一张图片作为头像</div>
        <div class="avatar__wrapper">
          <div class="avatar__left">
            <li v-for="(avatar, index) in defaultAvatars"
                :key="index"
                :class="{ 'active__img':  selectedAvatar === avatar}" @click="selectedAvatar = avatar">
              <img :src="avatar" width="100" height="100">
            </li>
          </div>
          <div class="avatar__right">
            <img :src="selectedAvatar" width="100" height="100">
          </div>
        </div>

        <div class="footer">
          <ns-button size="small" type="primary" @click="submit">确 定</ns-button>
          <ns-button size="small" @click="showDialog = false">关 闭</ns-button>
        </div>
      </ns-tab-pane>
      <ns-tab-pane label="本地头像上传" name="local">
        <div class="local__wrapper">
          <div class="local__decs">从电脑里挑选一张好图作为头像吧</div>
          <ns-upload v-model="uploadFiles"
                     :width="120" :height="120" :beforeUpload="beforeUpload"
                     :headers="requestHead" action="/api/property-service/common/uploadFileSub"></ns-upload>
          <div class="local__decs">支持jpg/png格式图片，文件需小于2M</div>
        </div>
        <div class="footer">
          <ns-button size="small" type="primary" @click="submit" :disabled="uploadFiles.length ===0">确 定</ns-button>
          <ns-button size="small" @click="showDialog = false">关 闭</ns-button>
        </div>
      </ns-tab-pane>
    </ns-tabs>
  </ns-dialog>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'updateAvatorDialog',

    props: {
      visible: Boolean,
    },

    data() {
      return {
        showDialog: false,
        tabModel: 'personality',
        defaultAvatars: [
          'https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_beauty.jpg',
          'https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_colleagues.jpg',
          'https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_family.jpg',
          'https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_friend.jpg',
          'https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg',
          'https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_trade.jpg',
        ],
        selectedAvatar: 'https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_trade.jpg',
        uploadFiles: [],
      };
    },

    watch: {
      visible(val) {
        this.showDialog = val;
      },
    },

    computed: {
      ...mapGetters(['requestHead']),
    },


    methods: {

      dialogClose() {
        this.showDialog = false;
        this.$emit('update:visible', this.showDialog);
      },

      submit() {
        if(this.tabModel === 'personality'){
           this.$emit('updateAvatar', this.selectedAvatar);
        }else{
          this.$emit('updateAvatar', this.uploadFiles[0].fileUrl);
        }
        this.showDialog = false;
      },

      //图片上传的校验
      beforeUpload(file) {
        let imageTypeList = ['image/jpeg', 'image/jpg','image/png'];
        if(imageTypeList.indexOf(file.type) === -1){
          this.$message.error('上传图片只能是jpeg, jpg, png格式');
          return false;
        }
        if (file.size / 1024 /1024 > 2) {
          this.$message.error('上传图片大小不能超过2M');
          return false;
        }
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .update-Avatar__dialog {
    .el-dialog__footer {
      display: none;
    }
    &.ns-dialog--autoHeight .el-dialog .el-dialog__body {
      padding-bottom: 5px;
    }
    .decs {
      padding: 5px 0;
    }

    .footer {
      text-align: right;
      padding: 10px 0;
    }
    .avatar__wrapper {
      display: flex;
      align-items: center;
      .avatar__left {
        width: 400px;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: #EEE;
        float: left;
        border: 1px solid #D9D9D9;
        li {
          cursor: pointer;
          margin: 10px;
          img {
            border: 2px solid #EEE;
            border-radius: 5px;
          }
          &.active__img {
            img {
              border-color: #60A2E6;
            }
          }
        }
      }

      .avatar__right {
        padding: 0 10px;
        text-align: center;
        flex: 1;
        margin-left: 20px;
      }

    }

    .local__wrapper{
      margin-left: 120px;
      .local__decs{
        padding: 10px 0;
      }
    }
  }
</style>

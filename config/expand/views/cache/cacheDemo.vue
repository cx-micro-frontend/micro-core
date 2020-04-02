<!--缓存示例页面-->
<template>
  <div class="win cacheDemo1">
    <div class="ns-container">
      <!--测试表单-->
      <ns-form :model="formModel">

        <ns-form-item prop="oldPassword" label="测试数据1">
          <ns-input v-model="formModel.iptModel1" placeholder="请输入测试数据1"></ns-input>
        </ns-form-item>

        <ns-form-item prop="oldPassword" label="测试数据2">
          <ns-input v-model="formModel.iptModel2" placeholder="请输入测试数据2"></ns-input>
        </ns-form-item>

      </ns-form>
      <h1>常规类目</h1>
      <ns-row>

        <ns-col :span="3">
          <div class="grid-content bg-purple">
            <ns-button icon="el-icon-circle-plus-outline" @click="getRouteKey">获取路由Key</ns-button>
          </div>
        </ns-col>
        <ns-col :span="3">
          <div class="grid-content bg-purple-light">
            <ns-button icon="el-icon-delete" @click="refreshCurrentPage">刷新当前页面</ns-button>
          </div>
        </ns-col>

      </ns-row>

      <h1>删除/新增类目</h1>
      <ns-row>
        <ns-col :span="3">
          <div class="grid-content bg-purple">
            <ns-button icon="el-icon-circle-plus-outline" @click="addCurrentCache">新增当前页面缓存</ns-button>
          </div>
        </ns-col>
        <ns-col :span="3">
          <div class="grid-content bg-purple-light">
            <ns-button icon="el-icon-delete" @click="delCurrentCache">删除当前页面缓存</ns-button>
          </div>
        </ns-col>
        <ns-col :span="3">
          <div class="grid-content bg-purple-light">
            <ns-button icon="el-icon-delete" @click="delAllCache">删除所有页面缓存</ns-button>
          </div>
        </ns-col>
      </ns-row>

      <h1>跳转类目</h1>
      <ns-row>
        <ns-col :span="3">
          <div class="grid-content bg-purple-light">
            <ns-button icon="el-icon-s-promotion" @click="normalJump">不刷新跳转页面</ns-button>
          </div>
        </ns-col>
        <ns-col :span="4">
          <div class="grid-content bg-purple-light">
            <ns-button icon="el-icon-delete-solid" @click="delTargetCacheJump">跳转页面并清除目标页缓存</ns-button>
          </div>
        </ns-col>
        <ns-col :span="4">
          <div class="grid-content bg-purple-light">
            <ns-button icon="el-icon-delete-solid" @click="delCurrentAndTargetCacheJump">跳转页面并清除当前页和目标页缓存</ns-button>
          </div>
        </ns-col>
      </ns-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cacheDemo',
    data() {
      return {
        targetUrl: 'system/systemDataDictionary',
        formModel: {
          iptModel1: '',
          iptModel2: '',
        },
      };
    },
    computed: {
      //当前路由信息
      currentRoute() {
        return this.$route;
      },
    },
    created() {
      alert('缓存示例页面初始化');
    },
    methods: {

      //获取路由Key
      getRouteKey() {
        console.log('获取路由Key:');
        const getRouteKey = this.NEAP_ROUTER.getRouteKey();
        console.log(getRouteKey);
        alert(`获取路由Key:${getRouteKey}`);
      },


      //新增当前页面缓存
      addCurrentCache() {
        console.log('新增当前页面缓存');
        this.NEAP_CACHE.addCache(this.currentRoute).then(
          cachedViews => {
            console.log('缓存路由页面的 name 队列');
            console.log(cachedViews);
          },
        );
      },

      /**
       * 删除当前页面缓存 - 可配合刷新页面完成业务逻辑
       * 只是删除当前页的缓存，界面是不会变化的（实例不会立即销毁，需要配合跳转页面实现)。
       * 若当前页未缓存，删除当前页面缓存，二次进入，会重新执行生命周期
       */
      delCurrentCache() {
        console.log('删除当前页面缓存');

        this.NEAP_CACHE.delCache(this.currentRoute).then(
          cachedViews => {
            console.log('缓存路由页面的 name 队列');
            console.log(cachedViews);
          },
        );
      },

      //
      /**
       * 刷新当前页面
       * 1、若当前页面缓存：必须跳转到当前页面的同时并清除其页面实例缓存，才会达到刷新页面的效果（重置vue实例)
       * 2、若当前页面不缓存：只需要跳转到当前页面即可达到刷新页面的效果（重置vue实例)
       */
      refreshCurrentPage() {
        console.log('刷新当前页面');
        this.$nextTick(() => {
          this.NEAP_ROUTER.refresh(this, {
            mark: '这是当前页刷新带的参数',
          });
        });
      },

      /**
       * 删除所有页面缓存
       * 所有缓存的页面全部失效
       */
      delAllCache() {
        this.NEAP_ROUTER.refreshAll();
        console.log('删除所有页面缓存');
      },

      //不刷新跳转页面
      normalJump() {
        console.log('不刷新跳转页面,');
        this.$router.push({ path: 'system/systemDataDictionary', query: { noRefresh: true } });
      },

      //跳转页面并清除目标页缓存
      delTargetCacheJump() {
        console.log('跳转页面并清除目标页缓存');
        this.$router.push({ path: this.targetUrl });
      },

      //跳转页面并清除当前页和目标页缓存
      delCurrentAndTargetCacheJump() {
        console.log('跳转页面并清除当前页和目标页缓存');

        //删除当前页面缓存
        this.NEAP_CACHE.delCache(this.currentRoute).then(
          cachedViews => {
            console.log('缓存路由页面的 name 队列');
            console.log(cachedViews);

            //跳转页面并清除目标页缓存
            this.$router.push({ path: this.targetUrl });
          },
        );

      },

    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .win.cacheDemo1 {
    h1 {
      color: #180f61;
      margin: 20px 0;
    }
  }

</style>

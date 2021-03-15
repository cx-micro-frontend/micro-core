<!-- 话务工具条 -->
<template>
  <div v-if="visivle">
    <!-- 迷你工具条 -->
    <mini-toolbar v-if="miniToolbarVisible" :agentstatus="agentstatus" @openToolbar="openToolbar"></mini-toolbar>

    <!-- 底部工具条 -->
    <div v-if="bottomToolbarVisible" class="toolbar">
      <div class="toolbar-img">
        <div
          v-if="agentstatus === '签出中' || agentstatus === '空闲中' || agentstatus === '忙碌中'"
          class="img"
        >
          <img src="./assets/phone2.png" width="14px" height="18px" />
        </div>
        <img v-else src="./assets/onTheLine.png" width="100%" />
      </div>

      <div class="toolbar-state">
        <div>{{ agentstatus }}</div>
        <div v-if="agentstatus === '正在通话'" class="call-clock">{{ hh }}:{{ mm }}:{{ ss }}</div>
        <div v-else>-- : -- : --</div>
      </div>

      <div v-if="agentstatus === '正在通话'" class="toolbar-userinfo">
        {{ phoneNumber.replace(new RegExp('^90'), '') }}
        <span class="name">{{customerName}}</span>
      </div>
      <ns-input v-else v-model="phoneNumber" placeholder="请输入电话号码"></ns-input>

      <ns-button v-if="agentstatus === '正在通话'" class="toolbar-4-1" @click="ClearCall">挂断</ns-button>
      <ns-button v-else class="toolbar-call" @click="outbondCall">呼出</ns-button>
      <ns-select
        v-if="agentstatus !== '正在通话'"
        class="toolbar-login"
        :class="{login: loginStatus === '1',busy: loginStatus === '2',logout: loginStatus === '3'}"
        v-model="loginStatus"
        :options="loginStatusList"
        :clearable="false"
        @change="changeloginStatus"
      ></ns-select>

      <div class="toolbar-7" @click="foldUp">></div>
    </div>
    
    <!-- 呼叫弹屏 -->
    <call-popup v-if="popupVisible" :phoneNumber="phoneNumber" :agentstatus="agentstatus" @ClearCall="ClearCall" @AnswerCall="AnswerCall"></call-popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { addCall, getAgentByUserId } from './service.js'
import { decode, CurentTime } from './utils/index.js'
import miniToolbar from './components/mini-toolbar'
import callPopup from './components/call-popup'
import { EventBus } from './utils/eventBus'

export default {
  name: 'call-toolbar',
  components: {
    miniToolbar,
    callPopup,
  },
  computed: {
    ...mapGetters(['bizExpandData']),
  },
  data() {
    return {
      ws: null, // WebSocket 实例
      serverAddress: '', // 服务器地址
      serverPort: '', // 服务器端口
      agentId: '', // 坐席工号
      agentPassword: '', // 座席密码
      deviceID: '', // 分机号
      agentUsername: '', // 坐席名称
      agentAccount: '', // 坐席账号
      relationId: '', // 关联录音记录id

      phoneNumber: '', // 客户电话
      customerName: '', // 客户姓名
      loginStatus: '3', // 座席登陆状态
      agentstatus: '签出中', // 座席状态
      loginStatusList: [
        {
          value: '1',
          label: '签入',
        },
        {
          value: '2',
          label: '置忙',
        },
        {
          value: '3',
          label: '签出',
        },
      ], // 座席状态
      popupVisible: false, // 弹屏是否显示
      bottomToolbarVisible: false, // 底部工具条是否显示
      miniToolbarVisible: true, // 迷你工具条是否显示
      callID: '', //当前活动呼叫ID
      timer: '', // 心跳
      isCallComing: false, // 是否来电,
      clocker: '', // 计时器
      hh: '00', // 时
      mm: '00', // 分
      ss: '00', // 秒
      lockReconnect:false, //避免重复连接，因为onerror之后会立即触发 onclose
      reconnectCount: 0, // 重连次数
      visivle: false, // 本组件是否显示
    }
  },
  watch: {
    bizExpandData: {
      handler(data) {
        if (data.CallingCenterToolBar && data.CallingCenterToolBar.value === '1') { // 开启工具条
          this.getAgentByUserId()
        }
      },
      immediate: true,
    },
  },

  methods: {
    // 初始化WebSocket
    initWebSocket() {
      this.ws = new WebSocket(`ws://${this.serverAddress}:${this.serverPort}`)
      this.ws.onopen = this.onOpen
      this.ws.onmessage = this.onMessage
      this.ws.onclose = this.onClose
      this.ws.onerror = this.onError
    },
    onOpen(event){
      console.log(event, '连接成功✔️')
    },
    // 指定收到服务器数据后的回调函数
    onMessage(event) {
      let data = decode(event.data)
      let res = JSON.parse(data)
      console.log(res, '收到服务器数据了✔️')
      if (res.Resp != null) {
        this.OnResp(res)
      } else if (res.Event != null) {
        this.OnEvent(res)
      }
    },
    onClose(e) {
      console.log('连接关闭⚡', e)
      clearTimeout(this.timer)
      this.timer = ''
      this.reconnect();
    },
    onError(e) {
      console.log('报错⚡', e)
      this.reconnect();
    },
    // 改变座席状态
    changeloginStatus(e) {
      switch (e) {
        case '1': // 点签入
          this.switchToFree()
          break
        case '2': // 点置忙
          this.switchToBusy()
          break
        case '3': // 点签出
          this.AgentLogout()
          break
      }
    },
    //签入，坐席登录
    switchToFree() {
      if (this.agentstatus === '签出中') {
        // 签出 -> 签入
        this.agentLogin()
      } else if (this.agentstatus === '忙碌中') {
        // 置忙 -> 签入
        this.setAgentState(5) // 示闲
      }
    },
    switchToBusy() {
      if (this.agentstatus === '空闲中') {
        // 签入 -> 置忙
        this.setAgentState(3)
      } else if (this.agentstatus === '签出中') {
        // 签出 -> 置忙(只有一个签入步骤，PS：因为之前的签入包括示忙)
        this.agentLogin()
      }
    },
    agentLogin() {
      this.ws.send(
        JSON.stringify({
          //发送签入数据
          Command: 'Login',
          AgentID: this.agentId,
          AgentPassword: this.agentPassword,
          DeviceID: this.deviceID,
          ExtData: 'ExtData',
        })
      )
    },
    //座席签出
    AgentLogout() {
      this.ws.send(
        JSON.stringify({
          //发送签出入数据
          Command: 'Logout',
          OpAgentID: this.agentId,
          Code: 0,
          DeviceID: this.deviceID,
          ExtData: 'ExtData',
        })
      )
      console.log('我发起签出🧡');
    },
    // 座席签入
    loginHandle(res) {
      if (res.Result === 0 && this.timer === '') {
        //定时的向服务器发送心跳
        this.timer = setTimeout(this.heartBeat, 10000)
      }
      if (res.Desc === '因为其他坐席占用当前分机,请重新签入！') {
        console.log('签入失败🧡')
        this.loginStatus = '3'
        this.agentStatus = '签出中'
        this.$message.error(res.Desc)
      } else if(res.Result === -100){
        this.loginStatus = '3'
        this.agentStatus = '签出中'
        this.$message.error(res.Desc)
      }
    },
    OnFreeOrBusy(res) {
      if (res.Desc === '成功') {
        if (this.loginStatus === '1') {
          console.log('示闲成功🧡')
          this.agentstatus = '空闲中'
        } else if (this.loginStatus === '2') {
          // 签出 -> 置忙
          console.log('示忙成功🧡')
          this.agentstatus = '忙碌中'
        }
      }
    },
    // 签入/签出/示闲/示忙
    OnResp(res) {
      switch (res.Resp) {
        case 'Login':
          this.loginHandle(res)
          break
        case 'Logout':
          console.log('签出成功🧡')
          this.agentstatus = '签出中'
          this.loginStatus = '3'
          break
        case 'SetAgentState':
          this.OnFreeOrBusy(res)
          break
      }
    },

    heartBeat() {
      this.ws.send(
        JSON.stringify({
          Device: this.deviceID,
          Time: CurentTime(),
        })
      )
      this.timer = setTimeout(this.heartBeat, 10000)
    },
    // 事件
    OnEvent(res) {
      switch (res.Event) {
        case 'OnAgentStateChangedEx': // 座席状态改变处理回调函数
          this.AgentStateChangedEx(res)
          break
        case 'OnCallOver': // 呼叫结束
          this.onCallOver(res)
          break
        case 'OnCallComing': // 呼入来电
          this.OnCallComing(res)
          break
        case 'OnCallConnected': // 呼入来电接通
          console.log('通话成功🧡')
          this.OnCallConnected(res)
          break
        case 'OnCalloutAnswered': // 呼出已应答
          console.log('对方已接听🧡')
          this.OnCallConnected()
          break
        case 'OnCalloutInit': // 外呼拨号
          console.log('座席摘机🧡')
          this.callID = res.CallID
          this.addCall(2, 2, res)
      }
    },

    //外呼
    outbondCall() {
      if (this.agentstatus !== '签出中' && this.phoneNumber) {
        this.popupVisible = true
        this.$router.push({ name: 'currentDialogue', query: { contactPhone: this.phoneNumber.replace(new RegExp('^90'), '') } })
        this.ws.send(
          JSON.stringify({
            Command: 'MakeCall',
            Number: this.phoneNumber,
            SendAni: '',
            CallData: '',
            DeviceID: this.deviceID,
            ExtData: 'ExtData',
          })
        )
      }
    },
    // 关联录音记录 1.拨出 2.摘机 3.通话结束 时调用
    addCall(callType, opType, responseJson) {
      addCall({
        callType: callType,
        telephone: this.phoneNumber.replace(new RegExp('^90'), ''),
        agentId: this.agentId,
        agentUsername: this.agentUsername,
        agentAccount: this.agentAccount,
        opType: opType,
        callId: this.callID,
        responseJson: JSON.stringify(responseJson),
        deviceId: this.deviceID,
        id: this.relationId,
      })
        .then((res) => {
          this.relationId = res.resultData
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //关闭呼叫
    ClearCall() {
      console.log('我点挂断🧡');
      this.ws.send(
        JSON.stringify({
          //发送挂机数据
          Command: 'ClearCall',
          CallID: '0',
          DeviceID: this.deviceID,
          ExtData: 'ExtData',
        })
      )
      this.popupVisible = false
    },
    // 折叠工具条
    foldUp() {
      this.bottomToolbarVisible = false
      this.miniToolbarVisible = true
    },
    // 展开工具条
    openToolbar() {
      this.bottomToolbarVisible = true
      this.miniToolbarVisible = false
    },
    // 座席状态改变
    AgentStateChangedEx(res) {
      if (res.StateCode === 6) {
        console.log('发起外呼成功🧡')
        this.relationId = ''
        this.addCall(2, 1, res)
        this.agentstatus = '拨号中'
      } else if (res.StateCode === 1 && res.StateType === 0) {
        console.log('签入成功🧡')
        if (this.loginStatus === '1') {
          // 签入后需要直接到示闲状态
          this.setAgentState(5) // 示闲
        } else if (this.loginStatus === '2') {
          // 签入 -> 置忙，直接改状态
          console.log('示忙成功🧡')
          this.agentstatus = '忙碌中'
        }
      } else if (res.StateCode === 16) {
        // 挂断
        this.agentstatus = '空闲中'
      }
    },
    onCallOver(res) {
      console.log('呼叫结束🧡')
      this.setAgentState(5) // 示闲
      this.callID = ''
      if (this.isCallComing) {
        this.addCall(1, 3, res)
      } else {
        this.addCall(2, 3, res)
      }
      this.isCallComing = false
      this.popupVisible = false
      this.phoneNumber = ''
      this.customerName = ''
      this.resetTimer()
    },
    OnCallComing(res) {
      console.log('有来电🧡')
      this.relationId = ''
      this.callID = res.CallID
      this.isCallComing = true
      this.addCall(1, 1, res)
      this.phoneNumber = res.OrgANI
      this.agentstatus = '有来电'
      this.$router.push({ name: 'currentDialogue', query: { contactPhone: this.phoneNumber.replace(new RegExp('^90'), '') } })
      this.popupVisible = true
    },
    OnCallConnected(res) {
      console.log('正在通话🧡')
      if (this.isCallComing) {
        this.addCall(1, 2, res)
      }
      this.popupVisible = false
      this.agentstatus = '正在通话'
      this.startTimer()
    },
    // 开始计时器
    startTimer() {
      this.clocker = setInterval(() => {
        let hh = parseInt(this.hh, 10)
        let mm = parseInt(this.mm, 10)
        let ss = parseInt(this.ss, 10)
        ss += 1
        if (ss >= 60) {
          ss = 0
          mm += 1
        }
        if (mm >= 60) {
          mm = 0
          hh += 1
        }
        hh = `${hh < 10 ? '0' + hh : hh}`
        mm = `${mm < 10 ? '0' + mm : mm}`
        ss = `${ss < 10 ? '0' + ss : ss}`
        this.hh = hh.toString()
        this.mm = mm.toString()
        this.ss = ss.toString()
      }, 1000)
    },
    resetTimer(){
      window.clearInterval(this.clocker)
　　  this.hh = '00';
　　  this.mm = '00';
　　  this.ss = '00';
    },
    AnswerCall() {
      this.ws.send(
        JSON.stringify({
          //发送呼叫应答数据
          Command: 'AnswerCall',
          CallID: this.callID,
          DeviceID: this.deviceID,
          ExtData: 'ExtData',
        })
      )
    },
    // 示忙/示闲
    setAgentState(agentState) {
      this.ws.send(
        JSON.stringify({
          Command: 'SetAgentState',
          OpAgentID: this.agentId,
          StateType: 1,
          AgentState: agentState,
          Reason: parseInt(0),
          DeviceID: this.deviceID,
          ExtData: 'ExtData',
        })
      )
    },
    // 刷新时签出
    beforeunloadHandler () {
      this.AgentLogout()
    },
    reconnect(){
      if(this.lockReconnect || this.reconnectCount > 2){
        return
      }
      this.lockReconnect = true;
      this.reconnectCount ++
      setTimeout(()=>{
        this.initWebSocket();
        this.lockReconnect = false;
      },5000)
    },
    // 获取坐席基本信息
    getAgentByUserId(){
      getAgentByUserId().then(res => {
        if (res.resultData !== null) { // 当前是座席
          this.visivle = true
          this.setAgentData(res.resultData)
        }
      }).catch(err => {
        console.log(err);
      });
    },
    setAgentData(data){
      this.serverAddress = data.serverAddress
      this.serverPort = data.serverPort
      this.agentId = data.agentNumber
      this.agentPassword = data.agentPassword
      this.deviceID = data.extensionNumber
      this.agentUsername = data.userName
      this.agentAccount = data.userAccount
      this.initWebSocket()
    }
  },

  mounted() {
    window.addEventListener('beforeunload', this.beforeunloadHandler)
  },
  created(){
    EventBus.$on('onCalling', name => {
      this.customerName = name
    })
  },

  async beforeDestroy() {
    this.lockReconnect = true;
    this.reconnectCount = 0
    window.removeEventListener('beforeunload', this.beforeunloadHandler)
    EventBus.$off('onCalling')
    await this.AgentLogout()
    this.ws.close()
  },
}
</script>

<style lang="scss" scoped>
.toolbar {
  width: 50%;
  position: fixed;
  bottom: 15px;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, 0);
  padding: 7px 8px;
  background: #1e203b;
  color: #8e96a5;
  font-size: 12px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .toolbar-item {
    margin-right: 10px;
  }
  > .toolbar-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    .img {
      padding: 9px 0;
      background: #404258;
      border-radius: 50%;
      display: flex;
      align-content: center;
      justify-content: center;
    }
  }
  > .toolbar-state {
    width: 15%;
    height: 36px;
    color: #cacbd1;
    > .call-clock{
      font-size: 17px;
    }
    > div {
      height: 18px;
      line-height: 18px;
    }
  }
  > .toolbar-userinfo {
    width: 58%;
    font-weight: bold;
    font-size: 19px;
    height: 22px;
    line-height: 22px;
    color: #fff;
    > .name{
      font-size: 12px;
      color: #cacbd1;
      font-weight: normal;
    }
  }
  > .toolbar-call {
    width: 12%;
    background: #020307;
    border-radius: 17px;
    text-align: center;
    color: #b8becc;
    border: none;
  }
  > .toolbar-4-1 {
    width: 68px;
    background: #ff4700;
    border-radius: 17px;
    text-align: center;
    color: #fff;
    border: none;
  }
  > .toolbar-login {
    width: 15%;
    line-height: 32px;
    border-radius: 17px;
    text-align: center;
    ::v-deep .el-input__inner{
      background-size:17px 17px;
      padding-left: 35px;
      background-repeat: no-repeat;
      background-position: 10px center;
      background-color: #020307;
    }
  }
  > .toolbar-login.login {
    ::v-deep .el-input__inner{
      background-image: url(./assets/login.png) ;
    }
  }
  > .toolbar-login.logout {
    ::v-deep .el-input__inner{
      background-image: url(./assets/logout.png) ;
    }
  }
  > .toolbar-login.busy {
    ::v-deep .el-input__inner{
      background-image: url(./assets/busy.png) ;
    }
  }
  > .toolbar-7 {
    width: 20px;
    height: 20px;
    line-height: 20px;
    background: #020307;
    border-radius: 17px;
    text-align: center;
    color: #fff;
  }
}
::v-deep .el-input__inner {
  background: #020307;
  border: none;
  color: #8e96a5;
  border-radius: 17px;
  font-size: 12px;
}
::v-deep .ns-select .el-input__inner {
  font-size: 12px;
}
::v-deep .ns-input.ns-input--normal{
  width: 33%;
  line-height: 29px;
}
</style>

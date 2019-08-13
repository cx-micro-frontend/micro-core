<template>
  <div class="ns-biz-choose-employee">
    <div class="choose-employee-main">
      <div class="choose-employee-select">
      <ns-select v-model="employeeIds" :options="employeeList"
                 :keyRefer="keyRefer" multiple collapse-tags
                 @change="changeSelect" :placeholder="placeholder"
                 width="100%"/>
    </div>
      <ns-button type="primary" size="small" @click="addEmployee">添加</ns-button>
    </div>
    <ns-biz-choose-employee-dialog
      :visible.sync="showChooseEmployeeDialog"
      :firstColType="firstColType"
      :funcId="funcId"
      @getCheckUserList="addCheckEmployee"></ns-biz-choose-employee-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Ns-biz-choose-employee',

    data() {
      return {
        employeeList: [],
        employeeIds: [],
        showChooseEmployeeDialog: false,
      };
    },

    props: {
      value: Array,
      funcId: [String, Number],
      placeholder: {
        type: String,
        default: '请选择'
      },

      keyRefer: {
        type: Object,
        default: () => ({ value: 'userId', label: 'userName' }),
      },

      firstColType: {
        type: String,
        default: 'selection'
      }
    },

    watch: {
      value: {
        handler(val) {
          this.employeeList = val;
          this.employeeIds = val.map((item) => {
            return item[this.keyRefer.value];
          });
        },
        immediate: true,
        deep: true,
      },
    },

    methods: {
      addEmployee() {
        this.showChooseEmployeeDialog = true;
      },

      //添加用户
      addCheckEmployee(list){
        if(this.firstColType === 'radio'){
          this.employeeList = list;
          this.employeeIds =  list[0][this.keyRefer.value];
        }else{
          let addList = list.filter((item)=>{
            return this.employeeIds.indexOf(item[this.keyRefer.value]) === -1;
          });
          this.employeeList = this.employeeList.concat(addList);
          this.employeeIds =  this.employeeIds.concat(addList.map( item => item[this.keyRefer.value]));
        }
        this.$emit('input',  this.employeeList);
      },

      //change
      changeSelect(){
        let emitEmployeeList =  this.employeeList.filter((item)=>{
          return  this.employeeIds.indexOf(item[this.keyRefer.value]) > -1;
        });
        this.$emit('input',emitEmployeeList);
      }
    },

  };
</script>

<style scoped>
  .choose-employee-main .choose-employee-select {
   flex: 1;
    margin-right: 10px;
  }
  .choose-employee-main {
    display: flex;
    align-items: baseline;
  }
</style>

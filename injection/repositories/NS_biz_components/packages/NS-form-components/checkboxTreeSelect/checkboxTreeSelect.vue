<!--checkbox tree in select components -->
<template>
  <div
    class="checkbox-tree-select"
    v-model="childModel"
    :style="{ width: simpleTreeSelect_width, height: simpleTreeSelect_height }"
  >
    <!--select-container-->
    <el-select
      class="select-container"
      v-model="childModel"
      :placeholder="placeholder"
      :size="size"
      :multiple="multiple"
      popper-class="checkbox-tree-select__option"
      :disabled="disabled"
      :clearable="clearable"
      @visible-change="visibleChange"
      @change="change"
      @blur="blur"
      @remove-tag="removeTag"
      @clear="initTreeModel"
    >
      <el-option
        class="not-render"
        v-for="item in multiple ? treeModel : [treeModel]"
        :key="item[keyRefer['value']]"
        :label="item[keyRefer['label']]"
        :value="item[keyRefer['value']]"
        v-show="false"
      ></el-option>
      <!--handle-modules-->
      <el-option
        class="tree-select__option"
        value="tree-select-option"
        key="tree-select-option"
        v-if="optionSw"
      >
        <ns-checkbox-tree
          v-model="treeModel"
          :multiple="multiple"
          :subconfig="treeSubConfig"
        ></ns-checkbox-tree>
      </el-option>
    </el-select>
  </div>
</template>
<script>
  import utils from '@NEAP/utils';
  import subconfig from './subconfig';
  import {getInitShowData} from '../../../service/packages/NS-form-components/checkbox-tree-select';

  export default {
    name: 'ns-checkbox-tree-select',
    data() {
      return {
        childModel: [], //model data
        outputModel: [],
        treeModel: null, //tree model data
        optionSw: false,
        subconfig: subconfig, //require config base on business type
        sizeMap: {small: '90px', medium: '120px', normal: '200px', large: '400px', adapt: '100%'},
      };
    },
    computed: {
      //key refer for every business status
      keyRefer() {
        let key = this.bizType;
        if (!this.bizType) key = 'normal';
        if (!this.subconfig.hasOwnProperty(this.bizType)) key = 'normal';
        return this.subconfig[key].keyRefer;
      },
      //request config information for base tree component
      treeSubConfig() {
        return this.subconfig[this.bizType ? this.bizType : 'normal'];
      },
      //actual - width
      simpleTreeSelect_width() {
        /*
           有 spec 属性则采用 spec 的值所对应的宽度作为宽度值， 否则采用 width 属性值。
           如果spec有值，请注意值是否正确（small，medium，normal，large），可以为 null。
          */
        if (this.spec) {
          return this.sizeMap[this.spec];
        }
        return this.autoForm.convertUnits(this.width, 'width', '100%');
      },
      //actual - height
      simpleTreeSelect_height() {
        if (this.multiple) {
          return 'auto';
        }
        return this.autoForm.convertUnits(this.height, 'height');
      },
    },
    created() {
      this.childModel = this.fatherModel;
      //set init tree model
      this.initTreeModel();
      //get select value and tree model data
      this.getInitShowData({organizationId: this.childModel});

    },
    methods: {
      /**
       * set init tree model-data
       */
      initTreeModel() {
        this.treeModel = this.multiple ? [] : {};
      },
      /**
       * get select value and tree model data
       */
      getInitShowData() {
        //get requset information
        const q = this.subconfig[this.bizType].initShowConfig;

        //if require query is not existent，don't to initiate a request
        if (!this.multiple && (!this.childModel && this.childModel !== 0)) return; //single situation && modelData is empty
        if (this.multiple && this.childModel.length === 0) return; //multiple situation && modelData is empty

        //request methods
        getInitShowData(q.url, this.childModel)
          .then(response => {
            console.log('获取select 初始显示modelData值');
            const res = response.resultData;
            console.log(res);
            this.treeModel = res; //set tree model data
          })
          .catch(err => {
            console.log(err)
            return Promise.reject(err);
          });
      },

      /**
       * create select value to show
       * @param dataFrom        data whitch handle data form
       */
      createSelectShow(dataFrom) {
        this.outputModel = [];
        //multiple situation
        if (this.multiple) {
          if (utils.judgeType(dataFrom) !== 'array') {
            throw 'in multiple situation, the data whitch use to create selectShow value should be array format ---- tree in select component';
          }
          this.childModel = [];
          //create select value list to show when select data list has content
          if (dataFrom.length > 0) {
            dataFrom.forEach(item => {
              this.childModel.push(item[this.keyRefer['value']]);
              this.setOutputModel(item);
            });
          }
        }
        //single situation
        else {
          if (utils.judgeType(dataFrom) !== 'object') {
            throw 'in single situation, the data whitch use to create selectShow value should be object format ---- tree in select component';
          }
          if (dataFrom) {
            this.childModel = dataFrom[this.keyRefer['value']];
            this.setOutputModel(dataFrom);
            console.log('显示值：');
            console.log(this.childModel);
            console.log(this.treeModel);
          } else {
            this.childModel = {};
          }
        }
      },

      /**
       * set output model
       * @param data
       */
      setOutputModel(data) {
        const model = {};
        this.treeSubConfig.outputKeyInList.forEach(item => {
          model[item] = data[item];
        });
        this.outputModel.push(model);
      },

      /**
       * visible-change
       * @param sw        open status
       */
      visibleChange(sw) {
        if (sw) this.optionSw = true; //when select opening, rendering tree component
      },
      /**
       * select change
       * @param value
       */
      change(value) {
        this.$emit('change', value);
      },
      blur() {
        this.$emit('change');
      },
      //remove tag
      removeTag() {
        //multiple situation
        if (this.multiple) {
          let newArr = [];
          const v = this.keyRefer['value'];
          for (let i of this.treeModel) {
            for (let j of this.childModel) {
              if (i[v] === j) {
                newArr.push(i);
              }
            }
          }
          this.treeModel = newArr;
        }
      },
    },
    props: {
      fatherModel: {
        type: [String, Number, Object, Array],
      },
      size: {type: String, default: 'small'}, //尺寸
      spec: {type: String}, //宽度size尺寸值（small，medium，normal，large,adapt）
      width: {type: [String, Number], default: '200px'},
      height: {type: [String, Number], default: '32px'},
      placeholder: {type: String, default: null},
      disabled: {type: Boolean, default: false}, //是否禁用
      multiple: {type: Boolean, default: false},
      clearable: {type: Boolean, default: true}, // *单选时   是否可以清空选项
      /*业务类型，决定初始值显示的请求路径，请求方式等
           如下值：（1、role-organization（组织树-单选)） 2、role-organizationList（组织树列表-多选)  3、charge-subject（科目树））
        */
      bizType: {type: String, default: 'normal'},
    },
    model: {
      prop: 'fatherModel',
      event: 'change',
    },
    watch: {
      treeModel: {
        handler(newValue, oldValue) {
          this.createSelectShow(newValue); //create select value to show
        },
        deep: true,
      },
      childModel(value) {
        this.$emit('change', this.childModel);
      },
      outputModel() {
        this.$emit('output', this.outputModel);
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .checkbox-tree-select {
    .el-input__icon.el-icon-circle-check {
      display: none;
    }
    .select-container {
      width: 100%;
      height: 100%;
    }
  }

  //option - part
  li.tree-select__option {
    height: auto;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0;
    &.hover,
    &:hover {
      background-color: transparent;
    }
  }
</style>

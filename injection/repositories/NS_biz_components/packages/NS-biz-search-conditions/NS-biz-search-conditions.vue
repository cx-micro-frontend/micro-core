<!--new 筛选器-->
<template>
  <div style="height: 70px" class="search-modular clear" :class="funcId">
    <div class="search-conditions borderBox fl clear" :class="showMore ? 'boxshadow' : ''">
      <div class="search-header clear">
        <!--所有筛选条件-->
        <div class="search-body fl">
          <div class="clear">
            <div class="clear fl" :style="{ width: searchBodyWidth + 'px' }">
              <div class="clear fl" v-for="(item, index) in thHeadList" v-show="index < num">
                <!--specConditions-->
                <template v-if="specConditions.length">
                  <div v-for="spec in specConditions" v-if="spec.condition === item.resourcecolumnCode">
                    <ns-date-picker
                      :class="(index + 1) % defaultNum === 0 ? 'margin-right0' : ''"
                      class="search-option"
                      v-if="spec.type === 'date' && spec.condition === item.resourcecolumnCode"
                      type="date"
                      value-format="yyyy-MM-dd"
                      :placeholder="item.resourcecolumnName"
                      v-model="conditions[item.resourcecolumnCode]"
                      @change="handleChange(item, spec)">
                    </ns-date-picker>
                    <ns-select
                      :class="(index + 1) % defaultNum === 0 ? 'margin-right0' : ''"
                      class="search-option"
                      v-else-if="spec.type === 'select' && spec.condition === item.resourcecolumnCode"
                      :placeholder="item.resourcecolumnName"
                      v-model="conditions[item.resourcecolumnCode]"
                      :multiple="spec.multiple"
                      collapse-tags
                      filterable
                      :options="spec.items"
                      @change="handleChange(item, spec)">
                    </ns-select>
                  </div>
                </template>
                <template v-if="!special.length || special.indexOf(item.resourcecolumnCode) === -1">
                  <ns-input
                    :class="(index + 1) % defaultNum === 0 ? 'margin-right0' : ''"
                    class="search-option"
                    v-if="item.resourcecolumnXtype === 'text' || item.resourcecolumnXtype === 'number'"
                    :placeholder="'请输入' + item.resourcecolumnName"
                    v-model.trim="conditions[item.resourcecolumnCode]"
                    @change="handleChange(item)">
                  </ns-input>
                  <ns-select
                    :class="(index + 1) % defaultNum === 0 ? 'margin-right0' : ''"
                    class="search-option"
                    v-else-if="item.resourcecolumnXtype === 'select'"
                    :placeholder="item.resourcecolumnName"
                    v-model="conditions[item.resourcecolumnCode]"
                    :options="item.selectList"
                    @change="handleChange(item)">
                  </ns-select>
                  <template v-else-if="item.resourcecolumnXtype === 'date' && item.date === 'start'">
                    <ns-date-picker
                      :class="(index + 1) % defaultNum === 0 ? 'margin-right0' : ''"
                      class="search-option fl"
                      value-format="yyyy-MM-dd"
                      :placeholder="item.resourcecolumnName === '应收日期' ? '应收开始日期' : item.resourcecolumnName + '开始'"
                      type="date"
                      v-model="dateConditions[item.resourcecolumnCode + '0']"
                      @change="handleChange(item)">
                    </ns-date-picker>
                  </template>
                  <template v-else-if="item.resourcecolumnXtype === 'date' && item.date === 'end'">
                    <ns-date-picker
                      :class="(index + 1) % defaultNum === 0 ? 'margin-right0' : ''"
                      class="search-option fl"
                      value-format="yyyy-MM-dd"
                      :placeholder="item.resourcecolumnName === '应收日期' ? '应收结束日期' : item.resourcecolumnName + '结束'"
                      type="date"
                      v-model="dateConditions[item.resourcecolumnCode + '1']"
                      @change="handleChange(item)">
                    </ns-date-picker>
                  </template>
                </template>
              </div>
            </div>
            <div
              class="search-btn fl clear"
              v-show="showConditions"
              :style="{ left: (searchBodyWidth - 12) + 'px', position: 'absolute' }">
              <div class="showMoreBtn fl">
                <ns-button class="border-none" type="text" @click="toggle">
                  <span>{{ showMore ? '收起' : '更多' }}</span>
                  <i class="el-icon--right" :class="showMore ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
                </ns-button>
              </div>
              <ns-button class="fl" type="primary" @click="query">搜索</ns-button>
              <ns-button class="fl" @click="clearFilter">重置</ns-button>
            </div>
          </div>
          <div class="clear saved-filter-list" v-if="showMore">
            <ns-button class="fl save-btn" @click="saveAsFilter(-1)" :disabled="isDisabled">保存</ns-button>
            <div class="filter-list fl cursor-pointer">
              <span @click="isShowfilterSelect = !isShowfilterSelect">
                <span class="filter-name inline-block oneline-ellipsis">
                  {{selectIndex === -1 ? '已保存的条件' : filterSelectList[selectIndex].filterName}}
                </span>
                <i
                  class="el-input__icon el-icon-error"
                  v-show="selectIndex !== -1"
                  @click.stop="clearFilter"></i>
                <i
                  slot="suffix"
                  class="el-input__icon"
                  :class="isShowfilterSelect ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
              </span>
              <ul
                v-show="isShowfilterSelect && filterSelectList.length"
                @mouseleave="isShowfilterSelect = false"
                :class="filterSelectList.length > 8 ? 'overflow' : ''">
                <li
                  v-for="(item, index) in filterSelectList"
                  @click="filterSelected(item, index)"
                  class="clear"
                  @mouseover="toggleBtnShow(index, true)"
                  @mouseout="toggleBtnShow(index, false)">
                  <span class="filter-option-name fl oneline-ellipsis">{{ item.filterName }}</span>
                  <div class="fr" v-show="showBtn && mouseOverIndex === index">
                    <ns-icon-svg icon-class="shanchu--copy" style="color: #fa763e" @click.stop="delFilterOption(index)"></ns-icon-svg>
                    <ns-icon-svg icon-class="bianji--copy" style="color: #3994fa" @click.stop="saveAsFilter(index)"></ns-icon-svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <slot></slot>
      </div>
      <ns-dialog
        title="筛选器名称"
        :visible.sync="dialogVisible.visible"
        type="autoHeight"
        @close="dialogClose">
        <div class="filter-name">
          <label>筛选器名称</label>
          <el-input
            v-model="strFilterName"
            placeholder="给筛选器起个名字吧"
            :class="errorBorder ? 'error-border' : ''"
          ></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
          <ns-button type="primary" @click="commitCondition">确 定</ns-button>
          <ns-button @click="dialogClose">取 消</ns-button>
        </span>
      </ns-dialog>
    </div>
  </div>
</template>


<script>
  import {filterFetch, filterFns, getItems} from '../../service/packages/NS-biz-search-conditions/NS-biz-search-conditions';
  import {mapGetters} from 'vuex';

  export default {
    name: 'ns-biz-search-condition',

    data() {
      return {
        showMore: false, // 更多or收起
        num: 5, // 显示筛选条件的数量
        defaultNum: 5, // 默认显示筛选条件的数量
        filterList: {
          // 过滤状态
          text: [
            {
              value: 'LIKE',
              label: '包含',
            },
          ],
          number: [
            {
              value: 'EQUAL',
              label: '等于',
            },
          ],
          select: [
            {
              value: 'EQUAL',
              label: '等于',
            },
          ],
          date: [
            {
              value: 'EQUAL',
              label: '等于',
            },
            {
              value: 'GREATER_EQUAL_THAN',
              label: '大于等于',
            },
            {
              value: 'LESS_EQUAL_THAN',
              label: '小于等于',
            },
          ],
        },
        conditions: {}, // 筛选条件
        dateConditions: {},
        tempConditions: {}, // 临时保存筛选条件
        filterSelectList: [], // 筛选器列表
        dialogVisible: {
          visible: false,
        }, // 保存筛选器弹框
        strFilterName: '', // 筛选器名称
        isNewFilter: false, // 新增or编辑
        selectIndex: -1, // 当前选中的筛选器index
        editIndex: -1, // 选中编辑的筛选器index
        isShowfilterSelect: false, // 显示筛选器下拉列表
        isDisabled: true, // 保存为按钮
        searchBodyWidth: 1280, // searchCondition宽度
        errorBorder: false, // 错误border
        showConditions: false,
        special: [],
        showBtn: false,
        mouseOverIndex: 0,
      };
    },
    props: {
      funcId: {
        type: [Number, String],
      },
      searchConditions: {
        // 筛选条件
        type: Object,
        function () {
          return {
            companyId: '', //公司id
            departmentId: '', //部门id
            filterList: [], //条件
            pageNum: 1, //当前页数
            pageSize: 10, //每页显示条目个数
            orderBy: '', //排序：升序还是降序
            orderFieldName: '', //排序：字段名
            mainSearch: '', //输入框值
            filterConditions: [], //筛选器记录的条件
            //add by xiaosisi on 20170320 用来存储其他检索条件
            otherConditions: {},
            organizationId: '',
            totalType: 1,
          };
        },
      },
      pageID: '', // 自动计划管理特殊处理
      defaultConditions: {
        type: Array,
        default() {
          return [];
        },
      },
      specOtherConditions: {
        type: Object,
        default() {
          return {};
        },
      },
      specConditions: {
        type: Array,
        default() {
          return [];
        },
      },

      localHead: Array
    },
    computed: {
      ...mapGetters(['tableHead']),

      thHeadList() {
        const list = this.localHead || this.tableHead;
        return list.filter((item) => {
          return item.resourcecolumnColumntip !== '1';
        });
      },
    },
    watch: {
      // 监听筛选条件，改变保存为按钮的状态
      conditions: {
        handler(newValue, oldValue) {
          this.changeSaveBtnStatus(newValue);
        },
        deep: true,
      },
      // thlist: {
      //   handler(newValue) {
      //     this.filterthList(newValue);
      //   },
      //   deep: true,
      // },
    },
    methods: {
      // 查询
      query() {
        this.showMore = false;
        this.num = this.defaultNum;
        this.searchConditions.filterList = this.handleConditionsData();
        this.searchConditions.pageNum = 1;
        this.$emit('query');
      },
      // 收起or更多
      toggle() {
        this.showMore = !this.showMore;
        this.num = this.showMore ? this.thHeadList.length : this.defaultNum;
      },
      // 每个筛选条件改变时更新保存的数据
      handleChange(item, specItem) {
        let type = item.resourcecolumnXtype;
        this.tempConditions[item.resourcecolumnCode] = [];

        if (type === 'date') {
          if (this.dateConditions.hasOwnProperty(item.resourcecolumnCode + '0')) {
            this.conditions[item.resourcecolumnCode] = [];
            this.conditions[item.resourcecolumnCode][0] = this.dateConditions[item.resourcecolumnCode + '0'];
          }
          if (this.dateConditions.hasOwnProperty(item.resourcecolumnCode + '1')) {
            this.conditions[item.resourcecolumnCode][1] = this.dateConditions[item.resourcecolumnCode + '1'];
          }
          // 类型是date，保存的数据是数组类型
          // 特殊处理：应收款管理计费周期开始和计费周期结束，房产收费设置计费开始日期和计费结束日期
          if (
            this.conditions.hasOwnProperty(item.resourcecolumnCode) &&
            this.conditions[item.resourcecolumnCode]
          ) {
            if (!Array.isArray(this.conditions[item.resourcecolumnCode])) {
              let fieldValue = this.conditions[item.resourcecolumnCode];
              let comparison = specItem.comparison;
              this.saveConditions(item, comparison, fieldValue);
            } else {
              // 如果数组中的两个值相等，comparison为EQUAL(等于)
              if (
                this.conditions[item.resourcecolumnCode][0] ===
                this.conditions[item.resourcecolumnCode][1]
              ) {
                let comparison = this.filterList[item.resourcecolumnXtype][0].value;
                let fieldValue = this.conditions[item.resourcecolumnCode][0];
                if (fieldValue) {
                  this.saveConditions(item, comparison, fieldValue);
                }
              } else {
                // 如果数组中的两个值不相等，comparison为GREATER_EQUAL_THAN(大于)和LESS_EQUAL_THAN(小于等于)
                for (let i = 0; i < this.conditions[item.resourcecolumnCode].length; i++) {
                  let comparison = this.filterList[item.resourcecolumnXtype][i + 1].value;
                  let fieldValue = this.conditions[item.resourcecolumnCode][i];
                  if (fieldValue) {
                    this.saveConditions(item, comparison, fieldValue);
                  }
                }
              }
            }
          }
        } else {
          // 类型是number、text、select
          if (
            this.conditions.hasOwnProperty(item.resourcecolumnCode) &&
            this.conditions[item.resourcecolumnCode]
          ) {
            if (Array.isArray(this.conditions[item.resourcecolumnCode])) {
              if (this.conditions[item.resourcecolumnCode].length) {
                let comparison = specItem.comparison;
                let fieldValue = this.conditions[item.resourcecolumnCode];
                this.saveConditions(item, comparison, fieldValue);
              }
            } else {
              let comparison = this.filterList[item.resourcecolumnXtype][0].value;
              let fieldValue = this.conditions[item.resourcecolumnCode];
              this.saveConditions(item, comparison, fieldValue);
            }
          }
        }
      },
      // 保存筛选条件  键(resourcecolumnCode)-值(数组)
      saveConditions(item, comparison, fieldValue) {
        if (comparison === 'IN') {
          fieldValue = fieldValue.length ? '("' + fieldValue.join('","') + '")' : '';
        }
        this.tempConditions[item.resourcecolumnCode].push({
          comparison: comparison,
          fieldName: item.resourcecolumnCode,
          fieldValue: fieldValue,
          type: item.resourcecolumnXtype,
          isShow: true,
        });
      },
      // 把所有筛选条件拼接成数组
      handleConditionsData() {
        let filters = [];
        if (JSON.stringify(this.tempConditions) !== '{}') {
          for (let i in this.tempConditions) {
            if (this.tempConditions.hasOwnProperty(i) && this.tempConditions[i].length) {
              filters = filters.concat(this.tempConditions[i]);
            }
          }
        }
        return filters;
      },
      /**
       * 保存筛选器弹框
       * @param index -1(新增) 非-1(编辑)
       */
      saveAsFilter(index) {
        this.errorBorder = false;
        this.isNewFilter = index === -1;
        this.strFilterName = index === -1 ? '' : this.filterSelectList[index].filterName;
        this.editIndex = index === -1 ? -1 : index;
        this.dialogVisible.visible = true;
      },
      // 保存筛选器
      commitCondition() {
        // 筛选器名称不为空
        if (this.strFilterName) {
          this.errorBorder = false;
          if (this.isNewFilter) {
            // 新增筛选器
            this.filterSelectList.push({
              filterName: this.strFilterName,
              filterList: this.handleConditionsData(),
              isShow: true,
              isDefault: false,
            });
            this.selectIndex = this.filterSelectList.length - 1;
            this.filterEdit(this.filterSelectList, true);
          } else {
            // 编辑筛选器名称
            this.filterSelectList[this.editIndex].filterName = this.strFilterName;
            this.filterEdit(this.filterSelectList);
          }
          this.dialogVisible.visible = false;
          this.showMore = false;
          this.num = this.defaultNum;
        } else {
          this.errorBorder = true;
        }
      },
      /**
       * 筛选器操作确定
       * @param conditions
       * @param flag 新增or编辑 新增执行查询操作
       */
      filterEdit(conditions, flag) {
        let datas = {
          conditions: conditions,
          funcId: this.funcId,
        };
        filterFns(datas).then(r => {
          if (flag) {
            // 新增执行查询操作
            this.getFilters(() => {
              this.$emit('query');
            });
          } else {
            this.getFilters();
          }
        });
      },
      // 筛选器数据获取
      getFilters(c) {
        // 筛选器
        filterFetch({
          funcId: this.funcId,
        }).then(r => {
          if (r.resultData && r.resultData.length > 0) {
            this.filterSelectList = JSON.parse(JSON.stringify(r.resultData));
          }
          c && c();
        });
      },
      // 选择筛选条件
      filterSelected(item, index) {
        this.selectIndex = index;
        this.isShowfilterSelect = false;
        this.showMore = false;
        this.num = this.defaultNum;
        // this.num = this.thlist.thlistDefault.length;
        // 选择筛选条件之后，自动填充，filterOptions绑定的数据，tempFilterOptions保存筛选条件
        let filterOptions = {},
          tempFilterOptions = {},
          filterList = item.filterList;
        for (let i = 0; i < filterList.length; i++) {
          if (filterList[i].type === 'text' || filterList[i].type === 'number') {
            filterOptions[filterList[i].fieldName] = filterList[i].fieldValue;
            tempFilterOptions[filterList[i].fieldName] = [filterList[i]];
          } else {
            if (filterOptions.hasOwnProperty(filterList[i].fieldName)) {
              filterOptions[filterList[i].fieldName].push(filterList[i].fieldValue);
              tempFilterOptions[filterList[i].fieldName].push(filterList[i]);
            } else {
              filterOptions[filterList[i].fieldName] = [filterList[i].fieldValue];
              tempFilterOptions[filterList[i].fieldName] = [filterList[i]];
            }
          }
        }
        this.conditions = filterOptions;
        this.tempConditions = tempFilterOptions;
        this.searchConditions.filterList = item.filterList;
        this.$emit('query');
      },
      // 筛选器删除
      delFilterOption(index) {
        this.$confirm('确定删除?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(
          () => {
            if (index === this.selectIndex) {
              this.clearFilter();
            } else if (index < this.selectIndex) {
              this.selectIndex--;
            }
            this.filterSelectList.splice(index, 1);
            this.filterEdit(this.filterSelectList);
          },
          () => {
          },
        );
      },
      // 清除筛选条件
      clearFilter() {
        this.selectIndex = -1;
        this.searchConditions.filterList = [];
        this.conditions = {};
        this.tempConditions = {};
        this.showMore = false;
        this.num = this.defaultNum;
        this.$emit('query');
      },
      // 设置筛选条件默认显示数量
      setSearchBodyWidth() {
        // 把this.funcId绑定为父元素的类，切换tab时会重新计算宽度，直接用search-conditions得到的是上一页的宽度，不会更新
        let searchConditionsWidth;
        if (this.pageID === 'autoPlanManage') {
          // 自动计划管理
          searchConditionsWidth = $('.autoPlan .search-conditions').width();
        } else if (this.pageID === 'taskLog') {
          // 应收款计算-任务查看
          searchConditionsWidth = 826;
        } else {
          searchConditionsWidth = $('.' + this.funcId + ' .search-body').width();
        }
        let num = Math.floor((searchConditionsWidth - 200) / 216);
        // 一行最多摆放5个
        num = num > 5 ? 5 : num;
        this.showMore = false;
        this.defaultNum = num;
        this.num = num;
        this.searchBodyWidth = this.defaultNum * 216;
        this.showConditions = true;
      },
      // 改变保存为按钮的状态
      changeSaveBtnStatus(conditions) {
        let num = 0;
        for (let i in conditions) {
          if (conditions.hasOwnProperty(i) && conditions[i]) {
            if (Array.isArray(conditions[i])) {
              if (conditions[i].length) {
                num++;
                break;
              }
            } else {
              num++;
              break;
            }
          }
        }
        this.isDisabled = !num;
      },
      // 关闭弹框
      dialogClose() {
        this.dialogVisible.visible = false;
      },
      // 监听浏览器resize事件
      addResizeEventListener() {
        // 页面最小宽度兼容到1280
        if (window.innerWidth >= 1280) {
          this.setSearchBodyWidth();
        }
      },
      toggleBtnShow(index, flag) {
        this.mouseOverIndex = index;
        this.showBtn = flag;
      },
      // // 处理筛选条件
      // filterthList(thlist) {
      //   let thHeadList = thlist.thlistDefault.filter(item => {
      //     if (item.resourcecolumnColumntip !== '1') {
      //       if (item.resourcecolumnXtype === 'date') {
      //         let index = this.specConditions.findIndex(o => {
      //           return o.condition === item.resourcecolumnCode;
      //         });
      //         item.isSplitDate = index === -1;
      //       }
      //       return item;
      //     }
      //   });
      //   this.thHeadList = [];
      //   // date类型拆分为两个
      //   thHeadList.forEach(o => {
      //     if (o.isSplitDate) {
      //       let o1 = this.deepClone(o);
      //       let o2 = this.deepClone(o);
      //       o1.date = 'start';
      //       o2.date = 'end';
      //       this.thHeadList = this.thHeadList.concat([o1, o2])
      //     } else {
      //       this.thHeadList.push(o);
      //     }
      //   });
      // },
      // 深拷贝
      deepClone(obj) {
        let objClone = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === 'object') {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              //判断ojb子元素是否为对象，如果是，递归复制
              if (obj[key] && typeof obj[key] === 'object') {
                objClone[key] = this.deepClone(obj[key]);
              } else {
                //如果不是，简单复制
                objClone[key] = obj[key];
              }
            }
          }
        }
        return objClone;
      },
    },
    created() {
      // if (this.thlist.thlistDefault.length) {
      //   this.filterthList(this.thlist);
      // }
      this.searchConditions.filterList = [];
      // 从房产信息报表跳转到房产管理  带默认参数
      if (this.defaultConditions.length) {
        this.searchConditions.filterList = this.defaultConditions;
      }
      // 获取筛选器列表
      this.getFilters(() => {
        // this.$emit('query');
      });
      this.special = this.specConditions.map(item => {
        if (item.type === 'select' && item.requestUrl !== '') {
          getItems({url: item.requestUrl}).then(res => {
            item.items = res.resultData.map(o => {
              return o instanceof Object
                ? {label: o[item.label], value: o[item.value]}
                : {label: o, value: o};
            });
          });
        }
        return item.condition;
      });
    },
    mounted() {
      this.setSearchBodyWidth();
      // 监听浏览器resize事件，兼容IE
      if (window.addEventListener) {
        window.addEventListener('resize', this.addResizeEventListener);
      } else if (window.attachEvent) {
        window.attachEvent('resize', this.addResizeEventListener);
      }
    },
    beforeDestroy() {
      if (window.addEventListener) {
        window.removeEventListener('resize', this.addResizeEventListener);
      } else if (window.attachEvent) {
        window.detachEvent('resize', this.addResizeEventListener);
      }
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import '../../style/Modular/search-conditions';
</style>

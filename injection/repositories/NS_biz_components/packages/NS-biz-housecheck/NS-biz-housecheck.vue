<template>
  <div v-if="loading" class="loading-block-container">
    <ns-loading-block></ns-loading-block>
  </div>
  <ns-tabs v-else v-model="modelPlaceholder.activeName">
    <ns-tab-pane v-for="(buildingItem, buildingIndex) in selectOptions.buildingList" :key="buildingItem.title" :name="buildingItem.title" :label="buildingItem.title">
      <div style="margin-bottom: 10px;">
        <ns-checkbox
          v-model="buildingItem.isCheckedAllRoom"
          @change="selectAllRoom($event, buildingIndex)"
          :isGroup="false"
          :disabled="type === 'show'"
        >全选
        </ns-checkbox>
      </div>
      <div v-if="buildingItem.roomOptions.length > 0">
        <ns-checkbox
          v-model="modelPlaceholder.buildingList[buildingIndex].options"
          type="button"
          :options="buildingItem.roomOptions"
          @change="selectCheckboxRoom($event, buildingIndex)"
          :isGroup="true"
          :disabled="type === 'show'"
        />
      </div>
      <div v-else-if="buildingItem.floorOptions.length > 0">
        <div v-for="(floorItem, floorIndex) in buildingItem.floorOptions" :key="floorItem.floor">
          <ns-checkbox
            v-model="floorItem.isCheckedAllFloor"
            @change="selectAllFloor($event, buildingIndex, floorIndex)"
            :isGroup="false"
            style="width: 60px;"
            :disabled="type === 'show'"
          >{{floorItem.floor}}
          </ns-checkbox>
          <ns-checkbox
            v-model="modelPlaceholder.buildingList[buildingIndex].options[floorIndex]"
            type="button"
            :options="floorItem.options"
            @change="selectCheckboxFloor($event, buildingIndex, floorIndex)"
            :isGroup="true"
            :disabled="type === 'show'"
            style="display: inline-block;"
          />
        </div>
      </div>
    </ns-tab-pane>
  </ns-tabs>
</template>

<script>
  export default {
    name: 'ns-biz-housecheck',

    props: {
      type: String,
      resultData: Array
    },

    data() {
      return {
        model: {
          buildingList: []
        },
        modelPlaceholder: {
          buildingList: [],
          activeName: ''
        },
        selectOptions: {
          buildingList: [] // 存放处理后的楼栋数据
        },
        loading: true
      }
    },

    methods: {
      // 清空表单
      clearForm() {
        this.model.buildingList = [];
        this.model.activeName = '';
        this.modelPlaceholder.buildingList = [];
        this.selectOptions.buildingList = [];
      },

      // 处理楼栋数据
      transformBuildingData(resultData) {
        this.selectOptions.buildingList = []; // 清空数据

        resultData.forEach((buildingItem, buildingIndex) => { // 循环楼栋
          if (buildingItem.children.every(item => {
            return Number(item.houseType) === 5
          })) {
            // 如果楼栋下全部为单元，则遍历单元
            buildingItem.children.forEach(cellItem => {

              let tempFloorOptions = []; // 存放所有楼层

              if (cellItem.children && cellItem.children.some(item => {
                return Number(item.houseType) === 66
              })) {
                let tempFloorOtherOptions = []; // 存放无楼层房间

                cellItem.children.forEach(floorItem => {
                  let floorLevel = null; // 楼层数
                  let floorRoomOptions = []; // 存放各楼层选项

                  if (Number(floorItem.houseType) === 66) {
                    // 获取楼层
                    floorLevel = floorItem.children[0].floor + '楼';

                    // 获取所属楼层房间
                    floorRoomOptions = floorItem.children.map(roomItem => {
                      return {
                        label: roomItem.houseName,
                        value: roomItem.houseId,
                        parentHouseId: roomItem.parentHouseId,
                        isChecked: roomItem.isChecked,
                        disabled: !roomItem.isEnabled
                      }
                    });

                    tempFloorOptions.push({
                      floor: floorLevel,
                      isCheckedAllFloor: false,
                      options: floorRoomOptions
                    })
                  } else if (Number(floorItem.houseType) === 6 && floorItem.floor) {
                    floorLevel = floorItem.floor;

                    // 获取无楼层但有楼层标识的特殊房间
                    floorRoomOptions = [
                      {
                        label: floorItem.houseName,
                        value: floorItem.houseId,
                        parentHouseId: floorItem.parentHouseId,
                        isChecked: floorItem.isChecked,
                        disabled: !floorItem.isEnabled
                      }
                    ]

                    tempFloorOptions.push({
                      floor: floorLevel,
                      isCheckedAllFloor: false,
                      options: floorRoomOptions
                    })
                  } else if (Number(floorItem.houseType) === 6 && !floorItem.floor) {
                    // 获取无楼层房间且无楼层标识的其他房间
                    tempFloorOtherOptions.push({
                      label: floorItem.houseName,
                      value: floorItem.houseId,
                      parentHouseId: floorItem.parentHouseId,
                      isChecked: floorItem.isChecked,
                      disabled: !floorItem.isEnabled
                    })
                  }
                });

                // 将无楼层房间且无楼层标识的其他房间统一添加到其他楼层展示
                if (tempFloorOtherOptions.length > 0) {
                  tempFloorOptions.push({
                    floor: '其它',
                    isCheckedAllFloor: false,
                    options: tempFloorOtherOptions
                  })
                }
              }

              this.selectOptions.buildingList.push({
                title: buildingItem.houseName + cellItem.houseName,
                isCheckedAllRoom: false,
                roomOptions: cellItem.children && cellItem.children.every(item => { // 可能会出现楼层与房间并存的情况，只有全部都是房间时，将数据存储到当前
                  return Number(item.houseType) === 6
                }) ? (cellItem.children.map(roomItem => { // 没有楼层的话，循环房间
                  return {
                    label: roomItem.houseName,
                    value: roomItem.houseId,
                    parentHouseId: roomItem.parentHouseId,
                    isChecked: roomItem.isChecked,
                    disabled: !roomItem.isEnabled
                  }
                })) : [],
                floorOptions: tempFloorOptions
              })
            })
          } else if (buildingItem.children.every(item => {
            return Number(item.houseType) === 6
          })) {
            // 如果楼栋不存在单元，全是房间
            this.selectOptions.buildingList.push({
              title: buildingItem.houseName,
              isCheckedAllRoom: false,
              roomOptions: buildingItem.children.map(roomItem => { // 没有楼层的话，循环房间
                return {
                  label: roomItem.houseName,
                  value: roomItem.houseId,
                  parentHouseId: roomItem.parentHouseId,
                  isChecked: roomItem.isChecked,
                  disabled: !roomItem.isEnabled
                }
              }),
              floorOptions: []
            })
          } else if (buildingItem.children.some(item => {
            return Number(item.houseType) === 66
          })) {
            // 如果楼栋不存在单元，直接是楼层或房间
            let tempFloorOptions = []; // 存放所有楼层
            let tempFloorOtherOptions = []; // 存放无楼层房间

            buildingItem.children.forEach(floorItem => {
              let floorLevel = null; // 楼层数
              let floorRoomOptions = []; // 存放各楼层选项

              if (Number(floorItem.houseType) === 66) {
                // 获取楼层
                floorLevel = floorItem.children[0].floor + '楼';

                // 获取所属楼层房间
                floorRoomOptions = floorItem.children.map(roomItem => {
                  return {
                    label: roomItem.houseName,
                    value: roomItem.houseId,
                    parentHouseId: roomItem.parentHouseId,
                    isChecked: roomItem.isChecked,
                    disabled: !roomItem.isEnabled
                  }
                });

                tempFloorOptions.push({
                  floor: floorLevel,
                  isCheckedAllFloor: false,
                  options: floorRoomOptions
                })
              } else if (Number(floorItem.houseType) === 6 && floorItem.floor) {
                floorLevel = floorItem.floor;

                // 获取无楼层但有楼层标识的特殊房间
                floorRoomOptions = [
                  {
                    label: floorItem.houseName,
                    value: floorItem.houseId,
                    parentHouseId: floorItem.parentHouseId,
                    isChecked: floorItem.isChecked,
                    disabled: !floorItem.isEnabled
                  }
                ];

                tempFloorOptions.push({
                  floor: floorLevel,
                  isCheckedAllFloor: false,
                  options: floorRoomOptions
                })
              } else if (Number(floorItem.houseType) === 6 && !floorItem.floor) {
                // 获取无楼层房间且无楼层标识的其他房间
                tempFloorOtherOptions.push({
                  label: floorItem.houseName,
                  value: floorItem.houseId,
                  parentHouseId: floorItem.parentHouseId,
                  isChecked: floorItem.isChecked,
                  disabled: !floorItem.isEnabled
                })
              }
            })

            // 将无楼层房间且无楼层标识的其他房间统一添加到其他楼层展示
            if (tempFloorOtherOptions.length > 0) {
              tempFloorOptions.push({
                floor: '其它',
                isCheckedAllFloor: false,
                options: tempFloorOtherOptions
              })
            }

            // 将当前楼栋数据存储
            this.selectOptions.buildingList.push({
              title: buildingItem.houseName,
              isCheckedAllRoom: false,
              roomOptions: [],
              floorOptions: tempFloorOptions
            })
          }
        });

        // 为多选添加默认空值
        this.modelPlaceholder.buildingList = []
        this.selectOptions.buildingList.forEach((item, index) => {
          if (item.roomOptions.length > 0) {
            let isCheckedList = [];
            item.roomOptions.forEach(roomItem => {
              if (roomItem.isChecked) {
                isCheckedList.push(roomItem.value)
              }
            });

            this.modelPlaceholder.buildingList.push({
              type: 'room',
              options: isCheckedList
            })
          } else if (item.floorOptions.length > 0) {
            this.modelPlaceholder.buildingList.push({
              type: 'floor',
              options: item.floorOptions.map(floorItem => {
                // 如果isChecked为1，则表示之前已选中
                let isCheckedList = [];
                floorItem.options.forEach(roomItem => {
                  if (roomItem.isChecked) {
                    isCheckedList.push(roomItem.value)
                  }
                });
                return isCheckedList
              })
            })
          } else { // 如果房产信息为空，添加一个空值
            this.modelPlaceholder.buildingList.push({
              type: 'room',
              options: []
            })
          }
        });

        // 获取默认选中值
        this.modelPlaceholder.activeName = this.selectOptions.buildingList[0].title;

        // 编辑初始化数据时检测全选
        if (this.type === 'edit' || this.type === 'show') {
          this.selectOptions.buildingList.forEach((buildingItem, buildingIndex) => {
            buildingItem.floorOptions.forEach((floorItem, floorIndex) => {
              if (floorItem.options.every(roomItem => Number(roomItem.isChecked) === 1)) {
                this.selectOptions.buildingList[buildingIndex].floorOptions[floorIndex].isCheckedAllFloor = true;
              }
            });
            if (buildingItem.floorOptions.length > 0) {
              this.checkFloorIsSelected(buildingIndex);
            } else if (buildingItem.roomOptions.length > 0) {
              this.selectCheckboxRoom(null, buildingIndex);
            }
          })
        }

        this.loading = false
      },


      // 单元全选
      selectAllRoom(isCheckedAll, index) {
        if (this.selectOptions.buildingList[index].roomOptions.length > 0) { // 处理无楼层全部房间选中
          // 清空原数组
          this.modelPlaceholder.buildingList[index].options = []
          if (isCheckedAll) {
            // 添加所有选中
            this.selectOptions.buildingList[index].roomOptions.forEach(roomItem => {
              if (!roomItem.disabled) {
                this.modelPlaceholder.buildingList[index].options.push(roomItem.value);
              }
            })
          }
        } else if (this.selectOptions.buildingList[index].floorOptions.length > 0) { // 处理有楼层全部房间选中
          // 清空原数组
          this.modelPlaceholder.buildingList[index].options.forEach((item, placeholderIndex) => {
            this.modelPlaceholder.buildingList[index].options[placeholderIndex] = [];
            this.selectOptions.buildingList[index].floorOptions[placeholderIndex].isCheckedAllFloor = false;
          })
          if (isCheckedAll) {
            // 添加所有选中
            this.selectOptions.buildingList[index].floorOptions.forEach((floorItem, floorIndex) => {
              floorItem.isCheckedAllFloor = true;
              floorItem.options.forEach((roomItem, roomIndex) => {
                if (!roomItem.disabled) {
                  this.modelPlaceholder.buildingList[index].options[floorIndex].push(roomItem.value)
                }
              })
            })
          }
        }
      },

      // 房间单选
      selectCheckboxRoom(val, index) {
        this.selectOptions.buildingList[index].isCheckedAllRoom = this.selectOptions.buildingList[index].roomOptions.length === this.modelPlaceholder.buildingList[index].options.length ? true : false
      },

      // 楼层全选
      selectAllFloor(isCheckedAllFloor, buildingIndex, floorIndex) {
        this.modelPlaceholder.buildingList[buildingIndex].options[floorIndex] = []
        if (isCheckedAllFloor) {
          this.selectOptions.buildingList[buildingIndex].floorOptions[floorIndex].options.forEach(roomItem => {
            if (!roomItem.disabled) {
              this.modelPlaceholder.buildingList[buildingIndex].options[floorIndex].push(roomItem.value)
            }
          })
        }
        this.checkFloorIsSelected(buildingIndex);
      },

      // 楼层单选
      selectCheckboxFloor(val, buildingIndex, floorIndex) {
        this.selectOptions.buildingList[buildingIndex].floorOptions[floorIndex].isCheckedAllFloor = this.selectOptions.buildingList[buildingIndex].floorOptions[floorIndex].options.length === this.modelPlaceholder.buildingList[buildingIndex].options[floorIndex].length ? true : false;
        this.checkFloorIsSelected(buildingIndex);
      },

      // 检测楼层是否全部选中
      checkFloorIsSelected(buildingIndex) {
        // 检测是否所有楼层都全选中，如果是，则勾选顶部全选按钮，不是，则取消
        this.selectOptions.buildingList[buildingIndex].isCheckedAllRoom = this.selectOptions.buildingList[buildingIndex].floorOptions.every(item => {
          return item.isCheckedAllFloor === true
        })
      },

      // 监听楼层选择确定最终要传输的数据
      watchSelect() {
        let houseIdList = [];
        this.modelPlaceholder.buildingList.forEach(buildingItem => {
          // 处理房间数据
          if (buildingItem.type === 'room') {
            buildingItem.options.forEach(roomItem => {
              houseIdList.push({
                houseId: roomItem,
                houseType: '6'
              })
            })
            // 处理楼层下属房间数据
          } else if (buildingItem.type === 'floor') {
            buildingItem.options.forEach(floorItem => {
              floorItem.forEach(roomItem => {
                houseIdList.push({
                  houseId: roomItem,
                  houseType: '6'
                })
              })
            })
          }
        })
        // 存储选中的数据
        this.model.buildingList = houseIdList;
        // 每次选择后将数据返回上级组件
        this.$emit('buildingList', this.model.buildingList);
      },
    },

    watch: {
      'resultData': {
        handler: function (val) {
          this.transformBuildingData(val);
        },
        deep: true
      },
      'modelPlaceholder.buildingList': { // 判断查验对象是否为空
        handler: function (val) {
          this.watchSelect();
        },
        deep: true
      },
      'selectOptions.buildingList': {
        handler: function (val) {
          this.watchSelect();
        },
        deep: true
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .el-tabs__item {
    height: 30px;
    line-height: 30px;
  }

  .el-tabs__nav-next, .el-tabs__nav-prev {
    line-height: 30px;
  }

  .loading-block-container {
    margin-top: 30%;
  }
</style>

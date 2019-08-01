<!-- ns-dropdown -->
<template>
  <el-dropdown
    :class="['ns-dropdown', 'ns-dropdown--' + dropdownMode]"
    size="small"
    :split-button="dropdownMode === 'split-button'"
    :trigger="trigger"
    @command="handleCommand"
  >
    <!--title click modules-->
    <div>
      <el-button :type="btnType" size="small" v-if="dropdownMode === 'button'"
      >{{ title }}<i class="el-icon-arrow-down el-icon--right"></i
      ></el-button>
      <div v-else-if="dropdownMode === 'split-button'">{{ title }}</div>
      <div class="el-dropdown-link" v-else-if="dropdownMode === 'icon'">
        <ns-icon-svg :icon-class="iconClass"></ns-icon-svg>
        <span class="ns-role-button-title">{{ title }}</span>
      </div>
      <span class="el-dropdown-link" v-else-if="dropdownMode === 'active-show'"
      >{{ titleCover }}<slot name="active-show"></slot
      ><i class="el-icon-caret-bottom el-icon--right"></i
      ></span>
      <span class="el-dropdown-link" v-else
      >{{ title }}<i class="el-icon-caret-bottom el-icon--right"></i
      ></span>
    </div>
    <!--menu for dropdown-->
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item, index) in items"
        :key="index"
        :index="index"
        :command="item.command"
        :disabled="item.disable"
        :divided="item.divided"
      >
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  export default {
    name: 'ns-dropdown',
    data() {
      return {
        includeMode: ['button', 'split-button', 'text', 'icon', 'active-show'],
        activeCommand: null,
      };
    },
    computed: {
      dropdownMode() {
        if (!this.includeMode.includes(this.mode)) {
          console.warn(
            'Mode not supported in ns-dropdown component，in order to render successfully, we reset the mode to "text". please find it.',
          );
          return 'text';
        }
        return this.mode;
      },
      titleCover() {
        if (!this.activeCommand) return this.title;
        return this.items.find(item => item.command === this.activeCommand).label;
      },
    },
    methods: {
      /**
       * dropdown command
       * @param command
       */
      handleCommand(command) {
        if (this.dropdownMode === 'active-show') {
          this.activeCommand = command;
        }
        this.$emit('command', command);
      },
    },
    props: {
      mode: { type: String, default: '' }, //'button', 'split-button', 'text', 'icon', 'active-show'
      title: { type: [String, Number], default: '更多' },
      trigger: { type: String, default: 'click' },
      btnType: { type: String },
      iconClass: { type: String, default: 'gengduo' }, //custom icon for dropdown
      items: {
        type: Array,
        default: function() {
          return [];
        },
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .ns-dropdown {
    &:hover {
      cursor: pointer;
    }
    &.ns-dropdown--icon,
    &.ns-dropdown--text,
    &.ns-dropdown--active-show {
      .el-dropdown-selfdefine {
        height: auto;
      }
    }
    .el-dropdown-selfdefine {
      padding: 0;
      margin: 0;
    }
  }
</style>

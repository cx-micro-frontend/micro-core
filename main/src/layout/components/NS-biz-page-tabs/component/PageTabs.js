import './style/index';
import { stopPropagation } from '../../../../utils/library/event';

export default {
  name: 'page-tabs',
  data() {
    return {
      isDisabledTooltip: true, // 是否需要禁止提示
    };
  },
  props: {
    data: { type: Array },
    type: { type: String, default: 'normal' }, //normal, trapezoid
    limit: { type: Number, default: 6 },
    autoJump: { type: Boolean, default: true },
    activeRule: { type: Function },
  },
  computed: {
    curPath() {
      return this.$route.path;
    },
    visitedView() {
      // console.log('* ============================= *');
      // console.log('上方显示历史访问tab标签列表如下：');
      // console.log(this.data.slice(-this.limit));
      // console.log('* ============================= *');

      //select the first 6 objects in the visited-views array
      return this.data.slice(-this.limit);
    },
    tagClass() {
      const _n = 'ns-page-tabs';
      return `${_n} ${_n}__${this.type}`;
    },
  },
  render(h) {
    return (
      <ul class={this.tagClass} style={{ display: this.visitedView.length ? 'block' : 'none' }}>
        {Array.from(this.visitedView).map((tag, i) => [
          <el-tooltip
            popper-class={'ns-tag-popper'}
            effect="light"
            content={tag.title}
            disabled={this.isDisabledTooltip}
          >
            <li
              class={['ns-tag-tooltip fl', { 'tag-active': this.isActive(tag.path) }]}
              key={tag.path}
              on-mouseover={this.onMouseOver.bind(this, `ns-tag-text-${i}`)}
              on-click={this.tabsjump.bind(this, tag)}
            >
              <el-tag class="ns-tag">
                <div class="ns-tag-contnet clear">
                  <img
                    class={'fl'}
                    src={
                      this.isActive(tag.path)
                        ? require('./image/pageTabs-active@3x.png')
                        : require('./image/pageTabs@3x.png')
                    }
                  />
                  <div class={'ns-tag-text fl'}>
                    <span ref={`ns-tag-text-${i}`}> {tag.title}</span>
                  </div>
                  <i
                    class={'el-tag__close el-icon-close fr'}
                    on-click={this.closeViewTabs.bind(this, tag)}
                  />
                </div>

                <div class="ns-tag-mask" />
              </el-tag>
            </li>
          </el-tooltip>,
        ])}

        {
          <div class={'operate-slot fr'}>
            {this.$slots['operate'] ? (
              <div slot="operate">{this.$slots['operate']}</div>
            ) : this.visitedView.length ? (
              <icon-class
                icon-class={'close-all'}
                class={'operate-slot-icon'}
                on-click={this.closeAllViewTabs}
              />
            ) : null}
          </div>
        }
      </ul>
    );
  },
  methods: {
    //close this tab
    closeViewTabs(view, $event) {
      stopPropagation($event);
      this.$emit('close-view-tabs', view);
    },
    //close all tabs
    closeAllViewTabs() {
      this.$emit('close-all-view-tabs', this.visitedView);
    },
    //judge tab is active or not
    isActive(path) {
      if (this.activeRule) {
        return this.activeRule(path);
      }
      return path === this.curPath;
    },
    //click tab jump
    tabsjump(tag) {
      console.log('又跳转了');
      if (this.autoJump) {
        this.$router.push({ path: tag.path });
      } else {
        this.$emit('click-view-tabs', tag);
      }
    },

    // 移入事件: 判断内容的宽度contentWidth是否大于父级的宽度
    onMouseOver(str) {
      let parentWidth = this.$refs[str].parentNode.offsetWidth;
      let contentWidth = this.$refs[str].offsetWidth;

      // 判断是否禁用tooltip功能
      this.isDisabledTooltip = contentWidth <= parentWidth;
    },
  },
};

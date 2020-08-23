import './style/index';

export default {
  name: 'page-tabs',
  data() {
    return {};
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
          <li
            class={['tab-tag', { 'tag-active': this.isActive(tag.path) }]}
            key={tag.path}
            on-click={this.tabsjump.bind(this, tag)}
          >
            <el-tag>
              <span class="el-tag-contnet">
                {
                  <img
                    src={
                      this.isActive(tag.path)
                        ? require('./image/pageTabs-active@3x.png')
                        : require('./image/pageTabs@3x.png')
                    }
                  />
                }
                <span class={'el-tag-text'}> {tag.title}</span>
              </span>
            </el-tag>
            <div class="tab-tag-mask"></div>
            <i
              class={'el-tag__close el-icon-close'}
              on-click={this.closeViewTabs.bind(this, tag)}
            />
          </li>,
        ])}

        {
          <div class={'operate-slot'}>
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
      $event.preventDefault();
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
      if (this.autoJump) {
        this.$router.push({ path: tag.path });
      } else {
        this.$emit('click-view-tabs', tag);
      }
    },
  },
};

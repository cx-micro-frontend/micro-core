import palette from './palette';
import innerCode from './template';
import { colorRGBtoHex, colorHexToRgba } from '../../../utils/library/color';
import './style/index.scss';

// 换肤功能组件
export default {
  name: 'ns-skiner',
  data() {
    return {
      childSkiner: this.value,
      popoverWidth: '150px',
      colorPickerActive: false,
      palette,
    };
  },
  props: {
    value: [String],
    method: { type: String, default: 'cssparame' }, //inline / cssparame
    colorFormat: {
      type: String,
      default: 'rgb',
      validate: f => {
        return ['hax', 'rgb'].indexOf(f) > -1;
      },
    },
  },
  watch: {
    value(val) {
      this.childSkiner = val;
    },
  },
  render(h) {
    const cycleRender = (theme, index) => {
      return theme.key === 'custom' ? (
        <ns-color-picker
          class={this.colorPickerActive ? 'active' : ''}
          color-format={'hex'}
          predefine={this.palette.predefine}
          on-change={this.changeTheme}
          value={this.childSkiner}
        />
      ) : (
        <li
          class={'fl theme-cycle'}
          key={index}
          style={{
            'background-color': theme.color === this.childSkiner ? theme.color : 'transparent',
            'border-color': theme.color,
          }}
          on-click={this.changeTheme.bind(this, theme.color, theme.key)}
        >
          {theme.color === this.childSkiner ? <i class={'el-icon-check'} /> : null}
        </li>
      );
    };

    return (
      <ul class={'ns-skiner__container'}>
        {this.palette.commons.map((theme, index) => cycleRender(theme, index))}
      </ul>
    );
  },
  methods: {
    /**
     * toggle theme by change className
     * @param key
     */
    toggleByAddClassName(key) {
      const themeprefix = 'theme-';
      const Layout = document.getElementById('layout');
      if (!Layout) return;
      Array.prototype.slice.call(Layout.classList).forEach(cls => {
        if (cls.includes(themeprefix)) {
          Layout.classList.remove(cls);
        }
      });
      Layout.classList.add(`${themeprefix}${key}`);
    },

    /**
     * toggle theme by insert style tags in the Head
     * @param key
     */
    toggleByInline(key) {
      const mark = `${this.$options.name}-inline`;
      const targetList = document.getElementsByTagName('style');
      //remove the same tag
      Array.prototype.slice.apply(targetList).forEach(item => {
        if (item.id === mark && item.title) {
          item.remove();
        }
      });
      const styleTag = document.createElement('style');
      styleTag.setAttribute('id', mark);
      styleTag.setAttribute('title', mark);
      document.head.appendChild(styleTag);
      styleTag.innerText = innerCode(key);
    },
    /**
     * change theme
     * @param value   hax / rgb
     * @param key
     */
    changeTheme(value, key) {
      this.colorPickerActive = !Boolean(key);
      const color = this.toggleFormat(value);
      this.childSkiner = color;
      this.$emit('input', color);

      if (this.method === 'inline') {
        this.toggleByInline(color);
      }

      this.$emit('change-theme', color);
    },

    /**
     * Togglr color format from hax <=> rgba
     * @param color
     * @returns {*}
     */
    toggleFormat(color) {
      if (this.colorFormat === 'rgb' && color.indexOf('rgb') === -1) {
        return colorHexToRgba(color).rgba;
      } else if (this.colorFormat === 'hax' && color.indexOf('#') === -1) {
        return colorRGBtoHex(color);
      }
      return color;
    },
  },
  created() {
    if (this.method === 'inline') {
      this.toggleByInline(this.toggleFormat(this.childSkiner));
    }
  },
};

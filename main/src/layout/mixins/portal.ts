import { Mixins } from 'vue-property-decorator';

/**
 * 是否是portal页
 */

// @ts-ignore
export default class portal extends Mixins() {
  get isPortal(): boolean {
    return this.$route.meta.key === 'portal';
  }
};

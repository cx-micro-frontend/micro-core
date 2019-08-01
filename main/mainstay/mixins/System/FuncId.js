import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentPageInfo']),
    Mix_funcId() {
      return this.currentPageInfo.funcId || null;//funcId
    }
  }
}

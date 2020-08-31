export default {
  props: {
    data: { type: Object },
    slotRander: { type: Function },
  },
  render(h) {
    return <span class="menu-slot">{this.slotRander ? this.slotRander(h, this.data) : ''}</span>;
  },
};

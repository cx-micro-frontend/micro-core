<template>
  <span class="ns-back-to-portal">
     <ns-icon-svg icon-class="suo"
                  @click="back"
     ></ns-icon-svg>
  </span>

</template>

<script>
  export default {
    name: 'ns-back-to-portal',
    methods: {
      back() {
        this.$router.push({ path: '/portal' });
      },
    },
  };
</script>

<style scoped>
  .ns-back-to-portal {

  }
</style>

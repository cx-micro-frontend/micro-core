<!--头部 - 右侧插槽-->
<template>
  <div class="headerSoltRight">
    <message-tips></message-tips>
  </div>
</template>

<script>
  import messageTips from './message-tips/message-tips';
  export default {
    name: 'headerSlotRight',
    components: {messageTips},
  };
</script>

<style rel="stylesheet/scss" lang="scss">

</style>

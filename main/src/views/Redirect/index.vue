<script>
  export default {
    created() {
      const { params, query } = this.$route;
      const { path } = params;
      console.log(33333333333)
      console.log(path)
      console.log(query)
      this.$router.replace({ path: '/' + path, query });
    },
    render: function(h) {
      return h(); // avoid warning message
    },
  };
</script>

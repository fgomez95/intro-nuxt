<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12" style="background-color">Menu</div>
    </div>
    <div class="row">
      <div class="col-2" style="background-color: blue; height:100vh">Navigation</div>
      <div class="col-10">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("user/setToken", "jahklhjkshfjklashfjashdkflja1646546");
    console.log(this.token);
  },
  computed: {
    token() {
      return this.$store.state.user.token;
    }
  }
};
</script>
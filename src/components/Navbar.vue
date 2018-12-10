<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">DotA</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/heroes"
            :class="`nav-link ${isActive}`">
            Heroes
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    isActive() {
      return this.$route.fullPath.indexOf('/heroes') !== -1 ? 'router-link-exact-active' : '';
    },
  },
};
</script>

<style scoped>
  .router-link-exact-active {
    color: #fff!important;
  }
</style>

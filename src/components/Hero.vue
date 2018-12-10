<template>
  <div
    :class="`card w-100 mb-3 ${this.$route.params.id == hero.id ? 'transparent' : ''}`">
    <img class="card-img-top" :src="hero.img" :alt="hero.name">
    <div class="card-body text-center">
      <h5 class="card-title">{{ hero.name }}</h5>
      <router-link
        :to="'/heroes/' + hero.id "
        class="btn btn-outline-primary">
        Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hero'],
  name: 'hero',
};
</script>

<style>
  .transparent {
    opacity: 0.3;
  }
</style>

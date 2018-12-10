<template>
  <div>
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
  body {
    padding-top: 4.5rem;
  }
</style>

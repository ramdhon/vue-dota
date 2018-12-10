<template>
  <div v-if="isLoading">
    <pulse-loader class="text-center" :color="'#343a40'" :size="'30px'"></pulse-loader>
  </div>
  <div class="py-4 px-5 bg-light rounded" v-else>
    <div class="text-center">
      <img :src="hero.img" :alt="hero.name" class="rounded border">
      <h1>{{ hero.name }}</h1>
      <hr>
    </div>
    <h6 class="mb-2 text-muted">
      <p>
        <strong>Primary Attribute:</strong>
        {{ hero.primary_attr.toUpperCase() }}
      </p>
      <p>
        <strong>Attack Type:</strong>
        {{ hero.attack_type }}
      </p>
      <p>
        <strong>Roles:</strong>
        {{ hero.roles.join(', ') }}
      </p>
      <p>
        <strong>Available in CM:</strong>
        {{ hero.cm_enabled ? 'Yes' : 'No' }}
      </p>
      <router-link
        to="/heroes/"
        class="btn btn-outline-primary">
        Close
      </router-link>
    </h6>
  </div>
</template>

<script>
import dotapi from '@/api/dotapi';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'hero-details',
  components: {
    PulseLoader,
  },
  data() {
    return {
      hero: {
        id: 0,
        name: '',
        primary_attr: '',
        attack_type: '',
        roles: [],
        img: '',
        cm_enabled: false,
      },
      isLoading: true,
    };
  },
  methods: {
    fetchHero() {
      this.isLoading = true;
      dotapi
        .get(`/heroes/${this.$route.params.id}`)
        .then(({ data }) => {
          this.hero = data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          // eslint-disable-next-line
          alert('Error while fetching details...');
        });
    },
  },
  mounted() {
    this.fetchHero();
  },
  watch: {
    $route() {
      this.fetchHero();
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row" v-if="isLoading">
      <div class="col-12">
        <pulse-loader class="text-center" :color="'#343a40'" :size="'30px'"></pulse-loader>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-sm-3">
        <hero
          v-for="hero in heroes"
          :hero="hero"
          :key="hero.id"
        />
      </div>

      <div class="col-sm-9">
        <div class="position-fixed">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dotapi from '@/api/dotapi';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Hero from '@/components/Hero.vue';

export default {
  name: 'heroes',
  components: {
    Hero,
    PulseLoader,
  },
  data() {
    return {
      heroes: [],
      isLoading: true,
    };
  },
  methods: {
    fetchHeroes() {
      dotapi
        .get('/heroes')
        .then(({ data }) => {
          this.heroes = data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          // eslint-disable-next-line
          alert('Error while fetching heroes...');
        });
    },
  },
  mounted() {
    this.fetchHeroes();
  },
};
</script>

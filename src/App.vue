<script>

import MainPage from './pages/MainPage.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: { MainPage, NavBar },
  computed: {
    didAutoLogout() {
      return this.$store.getters['auth/didAutoLogout']
    },
    curPath() {
      return this.$route.path;
    }
  },
  created() {
    this.$store.dispatch('auth/autoLogIn');
  },
  watch: {
    didAutoLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace('/')
      }
    },
    curPath(curVal, oldVal) {
      if (curVal === '/auth' || '/cart') {
        this.$store.commit('items/exitBoth');
      } 
      if (curVal === '/') {
        if(this.$route.hash === '#hoodies') {
          this.$store.commit('items/openHoodiesSection')
        } else {
          this.$store.commit('items/openTshirtsSection')
        }
      }
    }
  }
}

</script>

<template>
  <section class="content content_centered">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </section>
</template>

<style scoped lang="scss">
@import './styles/variables.scss';
.content {
    background-color: $bgDark;
    min-height: 100vh;
    width: 100%;
    max-width: 45rem;
}

.content_centered {
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 900px) {
.content {
    // background-color: $bgGrey;
    max-width: 75rem;
    height: 100vh;
}
}

</style>

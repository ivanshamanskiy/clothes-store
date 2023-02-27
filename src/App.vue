<script>
import MainPage from "./pages/MainPage.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: { MainPage, NavBar },
  computed: {
    didAutoLogout() {
      return this.$store.getters["auth/didAutoLogout"];
    },
    curPath() {
      return this.$route.path;
    },
  },
  created() {
    this.$store.dispatch("auth/autoLogIn");
  },
  watch: {
    didAutoLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace("/");
      }
    },
    curPath(curVal, _) {
      if (curVal === "/auth" || "/cart") {
        this.$store.commit("items/exitBoth");
      }
      if (curVal === "/") {
        if (this.$route.hash === "#hoodies") {
          this.$store.commit("items/openHoodiesSection");
        } else {
          this.$store.commit("items/openTshirtsSection");
        }
      }
    },
  },
};
</script>

<template>
  <section class="content content_centered">
    <nav-bar></nav-bar>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<style scoped lang="scss">
@import "./styles/variables.scss";
.content {
  background-color: $bgDark;
  min-height: 100vh;
  min-width: 33rem;
  width: 100%;
}

.content_centered {
  margin-left: auto;
  margin-right: auto;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (min-width: 750px) {
  .content {
    // background-color: $bgGrey;
    max-width: 75rem;
    height: 100vh;
  }
}
</style>

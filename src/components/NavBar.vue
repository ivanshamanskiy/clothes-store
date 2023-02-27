<script>
export default {
  data() {
    return {
      isNavHidden: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavHidden = !this.isNavHidden;
    },
  },
  computed: {
    tshirtsOn() {
      return this.$store.getters["items/tshirtsOn"];
    },
    hoodiesOn() {
      return this.$store.getters["items/hoodiesOn"];
    },
    cartLength() {
      return this.$store.getters["cart/getCartLength"];
    },
  },
};
</script>

<template>
  <section class="nav-bar" :class="{ 'nav-bar_hidden': isNavHidden }">
    <ul class="nav-bar__nav-links nav-bar__nav-links">
      <router-link to="/#tshirts">
        <li
          class="nav-bar__nav-link"
          :class="{ 'nav-bar__nav-link_active': tshirtsOn }"
          @click="this.$store.commit('items/openTshirtsSection')"
        >
          T-shirts
        </li>
      </router-link>
      <router-link to="/#hoodies">
        <li
          class="nav-bar__nav-link"
          :class="{ 'nav-bar__nav-link_active': hoodiesOn }"
          @click="this.$store.commit('items/openHoodiesSection')"
        >
          Hoodies
        </li>
      </router-link>
    </ul>
    <router-link to="/auth">
      <svg class="nav-bar__icon nav-bar__icon_right-margin">
        <use href="../sprite.svg#user"></use>
      </svg>
    </router-link>
    <router-link to="/cart">
      <svg class="nav-bar__icon">
        <use href="../sprite.svg#cart"></use>
      </svg>
      <div class="nav-bar__icon__qty">
        <p>{{ cartLength }}</p>
      </div>
    </router-link>
  </section>
  <div class="nav-bar__btn nav-bar__btn_centered" @click="toggleNav">
    <svg
      class="nav-bar__arrow"
      :class="[isNavHidden ? 'nav-bar__arrow_rotated' : '']"
    >
      <use href="../sprite.svg#nav-arrow-up"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables.scss";
.nav-bar {
  width: 100%;
  height: 10.6rem;
  display: flex;
  background-color: $bgGrey;
  align-items: center;
  padding: 0rem 4.5rem;
  position: relative;
  transition: height 0.7s;
  overflow: hidden;
}

.nav-bar_hidden {
  height: 0;
}

.nav-bar__nav-links {
  display: grid;
  row-gap: 0.8rem;
  list-style: none;
  margin-right: auto;
}

.nav-bar__nav-link {
  text-transform: uppercase;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: text-decoration 1s;
}

.nav-bar__nav-link_active {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.nav-bar__icon {
  width: 5.2rem;
  height: 5.2rem;
}

.nav-bar__icon__qty {
  position: absolute;
  top: -10px;
  right: -10px;
  height: 3rem;
  width: 3rem;
  background-color: $accent;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-bar__icon__qty > p {
  color: #fff;
  font-size: 1.4rem;
}

.nav-bar__icon_right-margin {
  margin-right: 2.5rem;
}

.nav-bar__btn {
  width: 11.5rem;
  height: 3.3rem;
  border-radius: 0 0 6px 6px;
  background-color: $bgGrey;
  cursor: pointer;
}

.nav-bar__btn_centered {
  margin-left: auto;
  margin-right: auto;

  display: grid;
  align-items: flex-start;
  justify-content: center;
}

.nav-bar__arrow {
  height: 3rem;
  width: 3rem;
  transition: transform 1s;
}

.nav-bar__arrow_rotated {
  transform: rotate(180deg);
}

a {
  text-decoration: none;
}

a:last-child {
  position: relative;
}

@media screen and (min-width: 600px) {
  .nav-bar__nav-links {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
}
</style>

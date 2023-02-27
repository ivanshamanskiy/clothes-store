<script>
export default {
  props: ["id", "placeholder"],
};
</script>

<template>
  <base-heading></base-heading>
  <form>
    <input
      id="email"
      placeholder="Email"
      @focus="this.error = null"
      v-model="login.val"
      class="form-container__input"
    />
  </form>
</template>

<style scoped lang="scss"></style>

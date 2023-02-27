<script></script>

<template>
  <button class="base-btn"><slot>Submit</slot></button>
</template>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.base-btn {
  display: inline-block;
  border: none;
  height: 5rem;
  width: 35%;
  max-width: 15rem;
  background-color: $accent;
  color: #fff;
  font-size: 1.6rem;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
}

// @media screen and (max-width: 360px) {
//     .base-btn {
//         height: 3.6rem;
//         width: 9rem;
//         font-size: 1.4rem;
//     }
// }

@media screen and (min-width: 750px) {
  .base-btn {
    height: 5rem;
    width: 15rem;
  }
}
</style>

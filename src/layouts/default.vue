<template>
  <div class="bg-white">
    <header-client></header-client>
    <slot></slot>
    <footer-client></footer-client>
  </div>
</template>

<script>
import HeaderClient from "../components/HeaderClient.vue";
import FooterClient from "../components/FooterClient.vue";

export default {
  components: {
    HeaderClient: HeaderClient,
    FooterClient: FooterClient,
  },
};
</script>

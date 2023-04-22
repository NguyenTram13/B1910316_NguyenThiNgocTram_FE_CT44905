<template>
  <router-link
    :to="{
      name: `${link}`,
    }"
    class="px-4 py-2 rounded-lg text-green-500 hover:bg-green-500 hover:text-white font-bold border-2 border-green-500"
  >
    {{ nameButton }}
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      require: true,
    },
    nameButton: {
      type: String,
      require: true,
    },
  },
};
</script>

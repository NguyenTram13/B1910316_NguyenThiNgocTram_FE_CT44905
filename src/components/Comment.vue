<template>
  <div class="flex">{{ rating.text }}</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  setup(props) {
    const rating = ref();
    rating.value = computed(() => props.rating);
    return {
      rating,
    };
  },
};
</script>

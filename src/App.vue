<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constants/index";
import { useStore } from "vuex";
import jwt_decode from "jwt-decode";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    function fetchCurrentUser() {
      let accessToken = localStorage.getItem("access_token") || null;
      // if (!accessToken && location.pathname != "/login") {
      //   return (window.location.href = "/login");
      // }
      if (accessToken) {
        var decodedPayload = jwt_decode(accessToken) || null;
        console.log(decodedPayload);
        store.dispatch("auth/handleSetUser", decodedPayload);
      }
    }
    fetchCurrentUser();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>

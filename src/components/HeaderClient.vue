<template>
  <div>
    <header
      class="px-16 py-4 bg-[rgba(255,255,255,0.8)] shadow-2xl w-full fixed top-0 left-0 right-0 z-[10]"
    >
      <div class="flex items-center gap-20">
        <div class="">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <nav class="flex items-center justify-between flex-1 text-white">
          <div class="flex items-center gap-5">
            <router-link
              class="font-bold text-uppercase text-slate-500 hover:text-orange-500"
              :to="{
                name: 'home',
              }"
              >Trang chủ</router-link
            >
            <router-link
              class="font-bold text-uppercase text-slate-500 hover:text-orange-500"
              :to="{
                name: 'home-khachsan',
              }"
              >Khách sạn</router-link
            >
          </div>

          <div v-if="!user" class="flex items-center gap-5">
            <router-link
              class="text-uppercase"
              :to="{
                name: 'login',
              }"
              >Đăng nhập</router-link
            >
            <router-link
              class="text-uppercase"
              :to="{
                name: 'login',
              }"
              >Đăng ký</router-link
            >
          </div>
          <div v-if="user" class="flex gap-3">
            <span class="font-bold text-orange-500"
              >Xin chào! {{ user.firstName + " " + user.lastName }}</span
            >
            <span> | </span>
            <span
              @click="logout"
              class="transition-all cursor-pointer text-slate-500 hover:text-orange-500"
              >Đăng Xuất</span
            >
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push({ name: "login" });
    },
  },
  created() {
    this.user = this.$store.state.auth.user;
  },
};
</script>

<style scrop>
.v-slide-group__prev,
.v-slide-group__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  color: white;
}
.v-slide-group__prev {
  left: 0;
  background: #00396b;
  z-index: 100;
}
.v-slide-group__next {
  right: 0;
  background: #00396b;
  z-index: 100;
}
.v-slide-group__content {
  position: relative;
}
.bg-section {
  background-image: url("../assets/1.jpg");
}
</style>

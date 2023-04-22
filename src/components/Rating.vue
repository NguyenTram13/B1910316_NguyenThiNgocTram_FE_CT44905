<template>
  <div
    class="flex w-[60%] flex-col items-center justify-center p-2 text-orange-400 shadow-lg gap-7"
  >
    <div class="flex flex-col items-center justify-center text-center gap-7">
      <v-rating class="w-[200px] h-[30px]" hover half-increments></v-rating>
      <span class="flex-1 text-xl font-bold">{{
        isNaN(total_rating) ? 0 : total_rating
      }}</span>
    </div>
    <div class="p-3 rounded-lg text-orange-400 w-[500px]">
      <form @submit.prevent="createRating" action="">
        <div class="my-2">
          Số sao:
          <input
            type="number"
            class="px-4 py-2 border rounded-lg"
            min="0"
            max="5"
            v-model="rating_new"
          />
        </div>
        <p class="m-0">Bình luận</p>
        <textarea
          type="text"
          v-model="text"
          placeholder="Nhập bình luận..."
          class="px-4 py-3 w-full border outline-none rounded-lg min-h-[100px]"
        ></textarea>
        <div class="my-3 text-end">
          <button
            type="submit"
            class="px-4 py-2 text-orange-400 rounded-lg shadow-lg hover:text-white hover:bg-orange-400"
          >
            Bình luận
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HotelService from "@/services/hotel.service";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import Swal from "sweetalert2";
import { computed } from "@vue/runtime-core";

export default {
  props: {
    id_hotel: {
      type: String,
    },
    total_rating: {
      type: Number,
    },
  },
  setup(props) {
    const rating = ref(3.5);
    const rating_new = ref(3.5);
    const store = useStore();
    const text = ref("");
    const total_rating = ref(0);
    total_rating.value = computed(() => props.total_rating);
    const createRating = async () => {
      try {
        if (!store.state.auth.user)
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Vui lòng đăng nhập để tiếp tục!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        console.log(props.id_hotel);
        const response = await HotelService.createRating(
          {
            rating: rating_new.value,
            name:
              store.state.auth.user.firstName +
              " " +
              store.state.auth.user.lastName,
            text: text.value,
          },
          props.id_hotel
        );
        if (response.status === 200) {
          console.log(response);
          rating_new.value = 1;
          text.value = "";
          Swal.fire({
            icon: "success",
            title: "Oops...",
            text: "Bình luận thành công!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    return { createRating, rating, rating_new, text };
  },
};
</script>
<style>
.v-rating {
  display: flex;
  gap: 30px;
}
</style>

<template>
  <div>
    <section class="">
      <img src="@/assets/bg-top.jpg" class="object-cover w-full" alt="" />
    </section>
    <section>
      <div class="grid grid-cols-5 gap-3 px-5 my-3">
        <span class="relative" v-for="banner in banners" :key="banner">
          <span class="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></span>
          <img :src="banner.image" alt="" class="" />
          <span
            class="absolute text-2xl font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            {{ banner.name }}</span
          ></span
        >
      </div>
    </section>
    <section class="px-48 mx-auto my-10">
      <p class="my-3 font-bold text-gray-500 uppercase">Search</p>
      <form action="">
        <div class="flex items-center gap-4">
          <select
            v-model="id_province"
            name=""
            id=""
            class="px-4 py-2 border rounded-lg cursor-pointer w-[300px]"
          >
            <option value="">Chọn tỉnh / thành phố</option>
            <option
              v-for="province in provinces"
              :key="province"
              :value="province._id"
            >
              {{ province.name }}
            </option>
          </select>
          <input
            type="text"
            class="px-4 py-3 border rounded-lg"
            placeholder="Cần thơ..."
          />
          <button
            type="submit"
            class="px-4 py-2 text-white rounded bg-slate-500 hover:bg-orange-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
    <div id="khachsan" class="px-48 py-5 my-10 bg-gray-100">
      <div class="grid grid-cols-3 gap-10">
        <div
          v-for="hotel in hotels.hotels"
          :key="hotel"
          class="flex flex-col bg-white rounded-lg shadow_hotel"
        >
          <img
            class="h-[250px] object-cover rounded-t-lg"
            :src="IMAGE_SERVER + hotel.images[0]?.filename"
            alt=""
          />
          <div class="flex flex-col justify-between flex-1 h-full gap-3 p-4">
            <div>
              <span class="italic font-bold text-gray-500">{{
                hotel.name
              }}</span>
              <p class="flex items-center gap-3 m-0">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 11 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 8.06979C4.06 8.06979 2.86 6.8998 2.86 5.4298C2.86 3.98979 4.03 2.78979 5.5 2.78979C6.97 2.78979 8.14 3.95979 8.14 5.4298C8.14 6.8698 6.94 8.06979 5.5 8.06979ZM5.5 3.38979C4.39 3.38979 3.46 4.2898 3.46 5.4298C3.46 6.5698 4.36 7.46979 5.5 7.46979C6.64 7.46979 7.54 6.5698 7.54 5.4298C7.54 4.2898 6.61 3.38979 5.5 3.38979Z"
                      fill="#D6A022"
                      stroke="#D6A022"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5.5 14.6698C5.23 14.6698 4.99 14.4898 4.93 14.2198C4.72 13.4398 4.3 12.2998 3.49 11.3698C2.53 10.2598 1.78 9.11983 1.33 8.33983C1.15 8.09983 0.999999 7.79983 0.849999 7.49983C0.549999 6.83983 0.399999 6.14983 0.399999 5.42983C0.399999 2.60983 2.68 0.329834 5.5 0.329834C8.32 0.329834 10.6 2.60983 10.6 5.42983C10.6 6.14983 10.45 6.83983 10.15 7.49983C10.15 7.49983 10.15 7.49983 10.15 7.52983C10.03 7.82983 9.85 8.12983 9.67 8.39983C9.22 9.14983 8.47 10.2898 7.54 11.3998C6.76 12.3298 6.31 13.4698 6.1 14.2498C6.01 14.4898 5.77 14.6698 5.5 14.6698ZM1.39 7.25983C1.51 7.52983 1.66 7.79983 1.84 8.03983C2.29 8.81983 3.04 9.92984 3.94 11.0098C4.81 12.0298 5.26 13.2598 5.5 14.0998C5.74 13.2598 6.19 12.0298 7.06 11.0098C7.99 9.92984 8.71 8.81983 9.16 8.06983C9.34 7.79983 9.49 7.55983 9.61 7.28983C9.61 7.28983 9.61 7.28983 9.61 7.25983C9.88 6.68983 10 6.05983 10 5.42983C10 2.93983 7.99 0.929834 5.5 0.929834C3.01 0.929834 0.999999 2.93983 0.999999 5.42983C0.999999 6.05983 1.12 6.65983 1.39 7.25983Z"
                      fill="#D6A022"
                      stroke="#D6A022"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>{{ hotel.address }}</span>
              </p>
              <p class="flex items-center gap-3 m-0">
                <span>Giá: </span
                ><span class="font-bold text-slate-800"
                  >{{ hotel.price }} đ</span
                >
              </p>
            </div>
            <router-link
              :to="{
                name: 'hotel',
                params: { id: hotel._id },
              }"
              class="bottom-0 flex items-center justify-center w-full gap-3 py-2 m-0 font-bold text-white uppercase bg-slate-800 hover:bg-orange-400"
            >
              xem ngay
            </router-link>
          </div>
        </div>
      </div>
      <div class="my-5 text-end">
        <v-pagination
          v-model="page"
          :length="`${hotels.totalPage}`"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import HotelService from "@/services/hotel.service";
import { IMAGE_SERVER } from "@/constants/index";
import ProvinceService from "@/services/province.service";

export default {
  setup() {
    const store = useStore();
    console.log(store.state.auth.user);
    const user = computed(() => store.state.auth.user);
    const router = useRouter();
    const hotels = ref([]);
    const id_province = ref("");
    const provinces = ref([]);
    const page = ref(1);
    const keyword = ref("");
    const per_page = 10;
    const fetchHotels = async (page, keyword, per_page, id_province) => {
      try {
        const response = await HotelService.getPagination(
          page,
          keyword,
          per_page,
          id_province
        );
        console.log(response);
        if (response.status === 200) {
          hotels.value = response.data;
        }
      } catch (e) {
        console.log(e);
        if (e.response.status === 401) {
          console.log("adasdas");
          router.push({ name: "login" });
        }
        if (e.response.status === 403) {
          router.push({ name: "403" });
        }
      }
    };
    const fetchProvinces = async () => {
      try {
        const response = await ProvinceService.getAll();
        console.log(response);
        if (response.status === 200) {
          provinces.value = response.data;
        }
      } catch (e) {
        console.log(e);
        if (e.response.status === 401) {
          console.log("adasdas");
          router.push({ name: "login" });
        }
        if (e.response.status === 403) {
          router.push({ name: "403" });
        }
      }
    };
    fetchProvinces();
    watch(page, (numberNew, numberOld) => {
      fetchHotels(numberNew, keyword.value, per_page);
    });
    watch(id_province, (id_province_new, id_province_old) => {
      // if (id_province_new != "" && id_province_old != id_province_new) {
      fetchHotels(page.value, keyword.value, per_page, id_province.value);
      // }
    });

    fetchHotels(1, "", per_page);
    return { user, id_province, provinces, page, hotels, IMAGE_SERVER };
  },
  data() {
    return {
      banners: [
        {
          image: "./a.jpg",
          name: "travel",
        },
        {
          image: "./b.jpg",
          name: "gastronomy",
        },
        {
          image: "./c.jpg",
          name: "amusement",
        },
        {
          image: "./d.jpg",
          name: "amusement",
        },
        {
          image: "./e.jpg",
          name: "academy",
        },
      ],
    };
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

.shadow_hotel {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
</style>

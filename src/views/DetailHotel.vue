<template>
  <div>
    <section>
      <img src="../../public/ve-may-bay-du-lich-viet(1).jpg" alt="" />
    </section>

    <section>
      <div
        class="flex items-center gap-3 px-4 py-3 font-bold text-orange-400 bg-slate-800"
      >
        <span class="font-bold">Home</span>
        <span>></span>
        <span>Hotel and resorts</span>
        <span>></span>
        <span>{{ hotel.name }}</span>
      </div>
    </section>
    <section
      class="flex flex-row-reverse items-center justify-between gap-10 px-12 my-8"
    >
      <div>
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
        <p class="flex items-center gap-3 my-3">
          <span>Tên: </span
          ><span class="font-bold text-slate-700">{{ hotel.name }} đ</span>
        </p>
        <p class="flex items-center gap-3 my-3">
          <span>Giá: </span
          ><span class="font-bold text-slate-700">{{ hotel.price }} đ</span>
        </p>
        <p class="my-5">
          The First Hotel Saigon is only a 5-minute drive from Tan Son Nhat
          international and domestic airport and a 15-minute drive from downtown
          Ho Chi Minh City; which is the first stop on the way to all the big
          cities of Vietnam, Laos and Cambodia. The hotel is ideally located
          near the main International Trade Fair Center - Phu Tho Stadium &
          Exhibition Center (2 km) and shopping centers: Maximark (800 m);
          Parkson C.T Plaza (1,5 km); Parkson Flemington (2km); Lotte Mart (2km)
          and sports centers: Tan Binh Sports Center (500 m) and National
          Defence Sports & Gymnasium Center II (800 m)
        </p>
      </div>

      <div class="w-full h-full my-5">
        <img
          v-for="image in hotel.images"
          :key="image"
          :src="IMAGE_SERVER + image.filename"
          alt=""
        />
      </div>
    </section>
    <div
      class="relative flex justify-center gap-5 px-24 py-3 text-white h-[67vh]"
    >
      <Rating :id_hotel="hotel._id" :total_rating="total_rating"></Rating>
      <div class="flex-1 px-5 overflow-scroll">
        <div
          class="flex flex-col w-full gap-2 my-3"
          v-if="hotel?.rating?.length > 0"
        >
          <div
            class="flex flex-col w-full gap-2 p-3 text-orange-400 rounded-lg shadow-lg bg-"
            v-for="rating in hotel.rating"
            :key="rating"
          >
            <v-rating
              class="w-[400px] h-[30px]"
              v-model="rating.rating"
              density="compact"
            ></v-rating>
            <span class="font-bold">{{ rating?.name }}</span>
            <span>
              {{ rating.text }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <section class="w-full px-48 py-10 bg-gray-100">
      <h3 class="text-[#00396b] italic text-2xl">Địa điểm tương tự</h3>
      <div class="grid grid-cols-3 gap-10 py-10">
        <div
          v-for="hotel in hotel_same"
          :key="hotel"
          class="flex flex-col bg-white rounded-lg shadow_hotel"
        >
          <img
            class="h-[250px] object-cover rounded-t-lg"
            :src="IMAGE_SERVER + hotel.images[0]?.filename"
            alt=""
          />
          <div class="flex flex-col justify-between flex-1 h-full gap-3 p-4">
            <span class="italic font-bold text-gray-500">{{ hotel.name }}</span>
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
              ><span class="font-bold text-slate-700">{{ hotel.price }} đ</span>
            </p>
            <router-link
              :to="{
                name: 'hotel',
                params: { id: hotel._id },
              }"
              class="flex items-center justify-center w-full gap-3 py-2 m-0 font-bold text-white uppercase bg-slate-700 hover:bg-orange-400"
            >
              xem ngay
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import HotelService from "@/services/hotel.service";
import ProvinceService from "@/services/province.service";
import { IMAGE_SERVER } from "@/constants/index";
import Rating from "@/components/Rating.vue";
import Comment from "@/components/Comment.vue";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    Rating: Rating,
    Comment: Comment,
  },
  setup() {
    const hotel = ref({});
    const province = ref({});
    const hotel_same = ref({});
    const rating = ref(3);
    const total_rating = ref();
    const router = useRouter();
    const route = useRoute();
    const id_hotel = ref(route.params.id);
    const fetchHotel = async (id) => {
      try {
        const response = await HotelService.findOne(id);
        await fetchProvince(response.data.id_province);
        await fetchHotelSame(response.data.id_province, id);

        console.log(response.data);
        if (response.status === 200) {
          hotel.value = response.data;
          let tt_rating = 0;
          response.data.rating.length > 0 &&
            response.data.rating.forEach((rating) => {
              tt_rating = tt_rating + rating.rating;
            });
          console.log(tt_rating);
          total_rating.value = parseFloat(
            tt_rating / response.data.rating.length
          ).toFixed(1);
        }
      } catch (e) {
        if (e.response.status === 401) {
          console.log("adasdas");
          router.push({ name: "login" });
        }
        if (e.response.status === 403) {
          router.push({ name: "403" });
        }
        console.log(e);
      }
    };
    const fetchProvince = async (id) => {
      try {
        const response = await ProvinceService.findOne(id);
        console.log(response);
        if (response.status === 200) {
          province.value = response.data;
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

    const fetchHotelSame = async (id_province, id) => {
      try {
        const response = await HotelService.getHotelSame(id_province, id);
        if (response.status === 200) {
          hotel_same.value = response.data;
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
    watch(route.params.id, (id_new, id_old) => {
      console.log(id_new);
    });
    fetchHotel(route.params.id);
    return { hotel, province, rating, IMAGE_SERVER, hotel_same, total_rating };
  },
};
</script>

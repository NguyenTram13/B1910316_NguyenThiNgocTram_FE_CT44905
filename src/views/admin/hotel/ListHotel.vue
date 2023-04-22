<template>
  <div>
    <h2 class="text-center w-full uppercase">Danh sách khách sạn</h2>
    <div class="flex justify-between px-4 items-center">
      <div class="flex-1">
        <form action="" class="w-full">
          <div class="flex gap-2 w-2/3 items-center">
            <p class="m-0 w-[100px] font-bold">Tìm kiếm:</p>
            <input
              v-model="keyword"
              type="text"
              placeholder="abc..."
              class="form-control py-2"
            />
          </div>
        </form>
      </div>
      <button-create
        nameButton="Tạo  khách sạn"
        link="/hotel/create"
      ></button-create>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th style="width: 10px">#</th>
            <th class="w-[10%]">Tên</th>
            <th>Địa chỉ</th>

            <th>Giá</th>
            <th>Danh sách ảnh</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody v-if="data?.hotels?.length > 0">
          <tr v-for="hotel in data.hotels" :key="hotel._id">
            <td>{{ hotel._id }}</td>
            <td>{{ hotel.name }}</td>
            <td>
              <span>
                {{ hotel.address }}
              </span>
            </td>
            <td>{{ hotel.price }}</td>
            <td>
              <div class="grid grid-cols-3 gap-2">
                <span
                  v-for="image in hotel.images"
                  :key="image"
                  class="w-[120px] h-[80px]"
                >
                  <img
                    class="w-full h-full object-cover"
                    :src="IMAGE_SERVER + image?.filename"
                    alt=""
                  />
                </span>
              </div>
            </td>
            <td>
              <div class="flex gap-3 justify-center">
                <router-link
                  :to="{
                    name: '/hotel/edit',
                    params: { id: hotel._id },
                  }"
                  class="py-2 cursor-pointer hover:scale-110 transition-all px-3 rounded-lg bg-yellow-500 text-white"
                  >Sửa</router-link
                >
                <span
                  @click="deleteHotel(hotel._id)"
                  class="py-2 cursor-pointer hover:scale-110 transition-all px-3 rounded-lg bg-red-500 text-white"
                  >Xóa</span
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <v-pagination
          v-model="page"
          :length="`${data.totalPage}`"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import HotelService from "@/services/hotel.service";
import { useRoute, useRouter } from "vue-router";
import { computed, watch } from "@vue/runtime-core";
import ButtonCreate from "@/components/ButtonCreate.vue";
import { IMAGE_SERVER } from "@/constants/index";
import { useStore } from "vuex";
import Swal from "sweetalert2";

export default {
  components: {
    ButtonCreate,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.auth.user);
    const data = ref([]);
    const page = ref(1);
    const keyword = ref("");
    const router = useRouter();
    const fetchHotels = async (page, keyword) => {
      try {
        const response = await HotelService.getPagination(page, keyword);
        console.log(response);
        if (response.status === 200) {
          data.value = response.data;
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
    watch(page, (numberNew, numberOld) => {
      fetchHotels(numberNew, keyword.value);
    });
    watch(keyword, (keywordNew, keywordOld) => {
      console.log(keywordNew);
      fetchHotels(page.value, keywordNew);
    });
    const clickCallback = () => {};
    fetchHotels(1, "");

    const deleteHotel = async (id) => {
      Swal.fire({
        title: "Bạn chắc chắn chứ?",
        text: "Khách sạn sẽ bị xóa ngay bây giờ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await HotelService.deleteHotel(id);
            if (response.status === 200) {
              fetchHotels(1, "");

              Swal.fire("Deleted!", "Xóa khách sạn thành công!", "success");
            }
          } catch (e) {
            console.log(e);
          }
        }
      });
    };
    return {
      data,
      page,
      user,
      keyword,
      deleteHotel,
      IMAGE_SERVER,
      clickCallback,
    };
  },
};
</script>

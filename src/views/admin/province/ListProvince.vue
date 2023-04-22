<template>
  <div>
    <h2 class="text-center w-full uppercase">Danh sách tỉnh thành</h2>
    <div class="flex justify-between px-4 items-center">
      <div class="flex-1">
        <form action="" class="w-full">
          <div class="flex gap-2 w-2/3 items-center">
            <p class="m-0 w-[100px] font-bold">Tìm kiếm:</p>
            <input
              v-model="keyword"
              type="text"
              placeholder="An giang..."
              class="form-control py-2"
            />
          </div>
        </form>
      </div>
      <button-create
        nameButton="Tạo tỉnh thành"
        link="/admin/province/create"
      ></button-create>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th style="width: 10px">#</th>
            <th>Tên tỉnh thành</th>
            <th>Ngày tạo</th>

            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody v-if="data?.provinces?.length > 0">
          <tr v-for="province in data.provinces" :key="province._id">
            <td>{{ province._id }}</td>
            <td>{{ province.name }}</td>

            <td>{{ province.createdAt }}</td>

            <td v-if="user._id != province._id">
              <div class="flex gap-3 justify-center">
                <router-link
                  :to="{
                    name: '/province/edit',
                    params: { id: province._id },
                  }"
                  class="py-2 cursor-pointer hover:scale-110 transition-all px-3 rounded-lg bg-yellow-500 text-white"
                  >Sửa</router-link
                >
                <span
                  @click="deleteProvince(province._id)"
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
import UserService from "@/services/user.service";
import { useRoute, useRouter } from "vue-router";
import { computed, watch } from "@vue/runtime-core";
import ButtonCreate from "@/components/ButtonCreate.vue";
import { IMAGE_SERVER } from "@/constants/index";
import { useStore } from "vuex";
import Swal from "sweetalert2";
import ProvinceService from "@/services/province.service";
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
    const fetchProvinces = async (page, keyword) => {
      try {
        const response = await ProvinceService.getPagination(page, keyword);
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
      fetchProvinces(numberNew, keyword.value);
    });
    watch(keyword, (keywordNew, keywordOld) => {
      console.log(keywordNew);
      fetchProvinces(page.value, keywordNew);
    });
    const clickCallback = () => {};
    fetchProvinces(1, "");

    const deleteProvince = async (id) => {
      Swal.fire({
        title: "Bạn chắc chắn chứ?",
        text: "Tỉnh thành sẽ bị xóa ngay bây giờ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await ProvinceService.deleteProvince(id);
            if (response.status === 200) {
              fetchProvinces(1, "");

              Swal.fire("Deleted!", "Xóa tỉnh thành thành công!", "success");
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
      deleteProvince,
      IMAGE_SERVER,
      clickCallback,
    };
  },
};
</script>

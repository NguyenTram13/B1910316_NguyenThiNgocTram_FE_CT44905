<template>
  <div>
    <h1>Tạo khách sạn</h1>
    <Form @submit="createHotel" :validation-schema="dataHotel">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Tên khách sạn</p>
          <Field
            v-model="dataHotel.name"
            name="name"
            type="text"
            class="form-control"
            placeholder="Tran"
          />
          <ErrorMessage name="name" class="text-red-500" />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Địa chỉ</p>
          <Field
            v-model="dataHotel.address"
            name="address"
            type="text"
            class="form-control"
            placeholder="Minh"
          />
          <ErrorMessage name="address" class="text-red-500" />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Giá</p>
          <Field
            v-model="dataHotel.price"
            name="price"
            type="number"
            class="form-control"
            placeholder="price"
          />
          <ErrorMessage name="price" class="text-red-500" />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Ảnh khách sạn</p>
          <Field
            v-model="dataHotel.images"
            type="file"
            multiple="multiple"
            name="images"
            class="form-control"
          />
          <img
            src=""
            class="w-[200px] object-cover mt-2"
            ref="showImage"
            alt=""
          />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Thuộc tỉnh thành</p>
          <select
            v-model="dataHotel.id_province"
            name="id_province"
            class="form-control"
          >
            <option value="" selected>Vui lòng chọn tỉnh thành</option>
            <option
              v-for="province in provinces"
              :key="province"
              :value="province._id"
            >
              {{ province.name }}
            </option>
          </select>
        </div>
      </div>
      <p
        v-if="loading"
        class="px-3 py-2 m-0 font-bold text-white bg-blue-500 rounded-lg"
      >
        <Loading />
      </p>

      <div v-if="!loading" class="flex justify-end my-2 flex-end">
        <button
          type="submit"
          class="px-3 py-2 font-bold text-white bg-blue-500 rounded-lg"
        >
          Thêm khách sạn
        </button>
      </div>
    </Form>
  </div>
</template>
<script>
import UserService from "@/services/user.service";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Loading from "@/components/Loading.vue";
import { IMAGE_SERVER } from "@/constants/index";
import HotelService from "@/services/hotel.service";
import ProvinceService from "@/services/province.service";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Loading,
    IMAGE_SERVER,
  },

  data() {
    const dataHotel = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      address: yup.string().required("Địa chỉ bắt buộc phải nhập"),
      price: yup.string().required("Giá bắt buộc phải nhập"),
    });
    return {
      loading: false,
      isShowRegister: true,
      messageSuccess: "",
      errMessage: "",
      dataHotel,
      provinces: null,
    };
  },
  methods: {
    showIamge(e) {
      console.log("ádssada");
      this.$refs.showImage.src = URL.createObjectURL(e.target.files[0]);
    },

    async createHotel() {
      try {
        console.log(this.dataHotel);
        this.loading = true;
        const formData = new FormData();
        formData.append("name", this.dataHotel.name);
        formData.append("price", this.dataHotel.price);
        formData.append("address", this.dataHotel.address);
        formData.append("id_province", this.dataHotel.id_province);

        if (this.dataHotel.images.length > 0) {
          this.dataHotel.images.forEach((image, index) => {
            console.log(image);
            formData.append(`images`, image);
          });
        }
        const response = await HotelService.createHotel(formData);
        console.log(response);
        if (response.status === 201) {
          this.$router.push({ name: "/admin/hotel" });
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
        this.messageSuccess = "Đăng kí thất bại!";

        console.log(e);
      }
    },
    async fetchProvinces() {
      try {
        const response = await ProvinceService.getAll();
        console.log(response);
        if (response.status === 200) {
          this.provinces = response.data;
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
    },
  },
  created() {
    this.fetchProvinces();
  },
};
</script>

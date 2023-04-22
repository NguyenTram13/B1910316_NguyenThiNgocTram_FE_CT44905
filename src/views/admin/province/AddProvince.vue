<template>
  <div>
    <h1>Tạo tỉnh thành</h1>
    <Form @submit="addProvince" :validation-schema="dataProvince">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <p class="font-bold text-lg mb-2">Tên tỉnh thành</p>
          <Field
            v-model="dataProvince.name"
            name="name"
            type="text"
            class="form-control"
            placeholder="Tên tỉnh thành"
          />
          <ErrorMessage name="name" class="text-red-500" />
        </div>
      </div>
      <p
        v-if="loading"
        class="px-3 m-0 py-2 font-bold text-white bg-blue-500 rounded-lg"
      >
        <Loading />
      </p>

      <div v-if="!loading" class="flex flex-end justify-start my-2">
        <button
          type="submit"
          class="px-3 py-2 font-bold text-white bg-blue-500 rounded-lg"
        >
          Thêm tỉnh thành
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
    const dataProvince = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
    });
    return {
      loading: false,
      isShowRegister: true,
      messageSuccess: "",
      errMessage: "",
      dataProvince,
    };
  },
  methods: {
    async addProvince() {
      try {
        this.loading = true;

        const response = await ProvinceService.createUser({
          name: this.dataProvince.name,
        });
        console.log(response);
        if (response.status === 201) {
          this.$router.push({ name: "/admin/province" });
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
        this.messageSuccess = "Thêm kí thất bại!";

        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Cập nhật tỉnh thành</h1>
    <Form @submit="updateProvince" :validation-schema="dataProvinceValidate">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <p class="font-bold text-lg mb-2">Name</p>
          <Field
            v-model="dataProvince.name"
            name="name"
            type="text"
            class="form-control"
            placeholder="An Giang"
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
          Cập nhật tỉnh thành
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
import { useRoute } from "vue-router";
import { IMAGE_SERVER } from "@/constants/index";
import provinceService from "@/services/province.service";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Loading,
  },
  data() {
    const dataProvinceValidate = yup.object().shape({
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
      dataProvince: {},
      IMAGE_SERVER,
      dataProvinceValidate,
    };
  },

  methods: {
    async fetchAccount(id) {
      try {
        const response = await provinceService.findOne(id);
        console.log(response);
        if (response.status === 200) {
          this.dataProvince = response.data;
        }
      } catch (e) {
        console.log(e);
        if (e.response.status === 401) {
          console.log("adasdas");
          this.$router.push({ name: "login" });
        }
        if (e.response.status === 403) {
          this.$router.push({ name: "403" });
        }
      }
    },
    async updateProvince() {
      try {
        console.log(this.dataProvince.name);
        this.loading = true;
        const formData = new FormData();
        formData.append("name", this.dataProvince.name);

        const response = await provinceService.upadteProvince(
          {
            name: this.dataProvince.name,
          },
          this.dataProvince._id
        );
        console.log(response);
        if (response.status === 201) {
          this.$router.push({ name: "/admin/province" });
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;

        console.log(e);
      }
    },
  },
  created() {
    console.log("adasd");
    this.fetchAccount(this.$route.params.id);
  },
};
</script>

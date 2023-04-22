<template>
  <div>
    <h1>Tạo tài khoản</h1>
    <Form @submit="signupAccount" :validation-schema="dataRegister">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">First Name</p>
          <Field
            v-model="dataRegister.firstName"
            name="firstName"
            type="text"
            class="form-control"
            placeholder="Nguyen"
          />
          <ErrorMessage name="firstName" class="text-red-500" />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Last Name</p>
          <Field
            v-model="dataRegister.lastName"
            name="lastName"
            type="text"
            class="form-control"
            placeholder="Tram"
          />
          <ErrorMessage name="lastName" class="text-red-500" />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Email</p>
          <Field
            v-model="dataRegister.email"
            name="email"
            type="text"
            class="form-control"
            placeholder="email@gmail.com"
          />
          <ErrorMessage name="email" class="text-red-500" />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Password</p>
          <Field
            v-model="dataRegister.password"
            name="password"
            type="password"
            class="form-control"
            placeholder="email@gmail.com"
          />
          <ErrorMessage name="password" class="text-red-500" />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Address</p>
          <Field
            name="address"
            v-model="dataRegister.address"
            type="text"
            class="form-control"
            placeholder="Bac Lieu"
          />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Tel</p>
          <Field
            name="tel"
            v-model="dataRegister.tel"
            type="text"
            class="form-control"
            placeholder="0123456789"
          />
        </div>
        <div class="col-span-6">
          <p class="mb-2 text-lg font-bold">Avatar</p>
          <Field
            v-model="dataRegister.avatar"
            type="file"
            @change="showIamge"
            name="avatar"
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
          <p class="mb-2 text-lg font-bold">Role</p>
          <select
            v-model="dataRegister.role"
            name="role"
            id=""
            class="form-control"
          >
            <option selected value="client">Client</option>
            <option value="admin">Admin</option>
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
          Thêm tài khoản
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

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Loading,
    IMAGE_SERVER,
  },

  data() {
    const dataRegister = yup.object().shape({
      firstName: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      lastName: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
        .string()
        .required("Email bắt buộc phải nhập")
        .email("Email không hợp lệ"),
      password: yup
        .string()
        .required("Mật khẩu bắt buộc phải nhập")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Mật khẩu phải 8 chữ số và ít nhất có 1 chữ hoa, 1 chữ thường, 1 kí tự đặt biệt,1 số"
        ),
    });
    return {
      loading: false,
      isShowRegister: true,
      messageSuccess: "",
      errMessage: "",
      dataRegister,
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    showIamge(e) {
      console.log("ádssada");
      this.$refs.showImage.src = URL.createObjectURL(e.target.files[0]);
    },

    async signupAccount() {
      try {
        this.loading = true;
        const formData = new FormData();
        formData.append("firstName", this.dataRegister.firstName);
        formData.append("lastName", this.dataRegister.lastName);
        formData.append("email", this.dataRegister.email);
        formData.append("password", this.dataRegister.password);
        formData.append("address", this.dataRegister.address);
        formData.append("tel", this.dataRegister.tel);
        formData.append("role", this.dataRegister.role);
        formData.append("avatar", this.dataRegister.avatar);

        const response = await UserService.createUser(formData);
        console.log(response);
        if (response.status === 201) {
          this.$router.push({ name: "/admin/accounts" });
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
        this.messageSuccess = "Đăng kí thất bại!";

        console.log(e);
      }
    },
  },
};
</script>

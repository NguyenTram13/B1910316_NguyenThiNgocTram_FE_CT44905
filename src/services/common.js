import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //api sau khi login mới thêm bearer
    console.log(config);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    console.log("vao day r hhehe");

    return response.data;
  },
  async function (error) {
    const config = error.config;
    const response = error?.response;

    if (response.status === 401) {
      console.log("vao day r");
      alert("het han dang nhap");
      return Promise.reject(error);
    }
    if (response.status === 403) {
      console.log("vao day admin r");
      return Promise.reject(error);
    }
    // if (
    //   response.status === 401 &&
    //   response.data.errors &&
    //   response.data.errors.message === "jwt expired"
    // ) {
    //   const res = await authApi.refreshToken();

    //   if (res.elements) {
    //     /**
    //      * * Sau khi gọi refresh token thì chúng ta sẽ có accessToken mới
    //      * * và set vào localStorage sau đó set lại headers cho axios
    //      */
    //     localStorage.setItem("accessToken", res.elements.accessToken);

    //     instance.defaults.headers.common["Authorization"] =
    //       "Bearer " + res.elements.accessToken;

    //     return instance(config);
    //   }
    // }

    return Promise.reject(error);
  }
);

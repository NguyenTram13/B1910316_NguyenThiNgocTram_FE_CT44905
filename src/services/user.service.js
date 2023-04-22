import createApiClient from "./api.service";
import "../services/common.js";
class UserService {
  constructor(baseUrl = "http://localhost:3000/api/auth/user") {
    this.api = createApiClient(baseUrl);
  }

  async getPagination(page, keyword) {
    return await this.api.get(`/pagination?page=${page}&keyword=${keyword}`);
  }
  async createUser(data) {
    return await this.api({
      method: "POST",
      url: "/create",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  }
  async deleteAccount(id) {
    return await this.api.delete(`/${id}`);
  }
  async findOne(id) {
    return await this.api.get(`/detail/${id}`);
  }

  async upadteUser(data, id) {
    return await this.api({
      method: "PATCH",
      url: `/update/${id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  }
}

export default new UserService();

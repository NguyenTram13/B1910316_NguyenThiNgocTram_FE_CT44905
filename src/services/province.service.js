import createApiClient from "./api.service";
import "../services/common.js";
class ProvinceService {
  constructor(baseUrl = "http://localhost:3000/api/auth/province") {
    this.api = createApiClient(baseUrl);
  }

  async getPagination(page, keyword) {
    return await this.api.get(`/pagination?page=${page}&keyword=${keyword}`);
  }
  async createUser(data) {
    return await this.api({
      method: "POST",
      url: "/create",
      data: data,
    });
  }
  async deleteProvince(id) {
    return await this.api.delete(`/${id}`);
  }
  async findOne(id) {
    return await this.api.get(`/detail/${id}`);
  }

  async upadteProvince(data, id) {
    return await this.api({
      method: "PATCH",
      url: `/update/${id}`,
      data: data,
    });
  }
  async getAll() {
    return await this.api.get(`/getAll`);
  }
}

export default new ProvinceService();

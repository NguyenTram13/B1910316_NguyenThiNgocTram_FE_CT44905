import createApiClient from "./api.service";
import "../services/common.js";
class HotelService {
  constructor(baseUrl = "http://localhost:3000/api/auth/hotel") {
    this.api = createApiClient(baseUrl);
  }

  async getPagination(page, keyword, per_page = 3, id_province = "") {
    return await this.api.get(
      `/pagination?page=${page}&keyword=${keyword}&per_page=${per_page}&id_province=${id_province}`
    );
  }
  async getHotelSame(id_province, id_doc) {
    return await this.api.get(`/getHotelSame/${id_province}/${id_doc}`);
  }
  async createHotel(data) {
    return await this.api({
      method: "POST",
      url: "/create",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  }
  async deleteHotel(id) {
    return await this.api.delete(`/${id}`);
  }
  async findOne(id) {
    return await this.api.get(`/detail/${id}`);
  }

  async updateHotel(data, id) {
    return await this.api({
      method: "PATCH",
      url: `/update/${id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    });
  }
  async createRating(data, id) {
    return await this.api({
      method: "POST",
      url: "/create_rating/" + id,

      data: data,
    });
  }
}

export default new HotelService();

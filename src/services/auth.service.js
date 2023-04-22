import createApiClient from "./api.service";

class AuthService {
  constructor(baseUrl = "http://localhost:3000/api/auth") {
    this.api = createApiClient(baseUrl);
  }

  async login(data) {
    return await this.api.post("/login", data);
  }
  async register(data) {
    return await this.api.post(`/register`, data);
  }
}

export default new AuthService();

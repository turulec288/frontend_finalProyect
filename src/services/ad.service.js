import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";
import apiInstace from "./apiInstance";

class AdService {
  constructor() {
    this.api = apiInstace;
  }

  create(data) {
    return this.api.post(`/ad/`, data);
  }

  edit(id, data) {
    return this.api.put(`/ad/${id}`, data);
  }

  delete(id) {
    return this.api.delete(`/ad/${id}`);
  }

  getAll() {
    return this.api.get("/ad/");
  }

  getOne(id) {
    return this.api.get(`/ad/${id}`);
  }
}

const adService = new AdService();

export default adService;
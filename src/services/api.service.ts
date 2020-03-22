import axios from "axios";
import { environment } from "../environments/environments";

const api = axios.create({
  baseURL: environment.constants.api_domain
});

export default api;

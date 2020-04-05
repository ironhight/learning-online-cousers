import axios from 'axios';
import { environment } from '../environment/environment';

const api = axios.create({
  baseURL: environment.constants.api_domain,
});

export default api;

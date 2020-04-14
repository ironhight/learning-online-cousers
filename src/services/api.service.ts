import axios from 'axios';
import { environment } from '../environment/environment';

const Api = axios.create({
  baseURL: environment.constants.api_domain,
});

export default Api;

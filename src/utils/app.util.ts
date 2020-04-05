import axios from 'axios';
import { environment } from '../environment/environment';
import Token from './token.util';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Api {
  api: any;
  constructor() {
    let api = axios.create({
      baseURL: environment.constants.api_domain,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        version: 1,
        clienttypeid: 1,
        authorname: 'ironhight',
        hashcode: '1806',
      },
    });
    this.api = api;
  }

  setHeader(setHeader: boolean = true) {
    let headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '',
      version: 1,
      clienttypeid: 1,
      authorname: 'ironhight',
      hashcode: '1806',
      // "currentbranchid": 1
    } as any;
    if (setHeader) {
      let tokenUser = Token.getToken(
        environment.constants.access_token_variable_name
      );
      if (tokenUser) {
        headersConfig = { ...headersConfig, token: tokenUser };
      }
      if (localStorage.getItem('current_branch')) {
        headersConfig = {
          ...headersConfig,
          currentbranchid: `${
            JSON.parse(localStorage.getItem('current_branch') as string).id
          }`,
        };
      }
    }
    return headersConfig;
  }

  // cruid api
  post(
    options: { data: any; url?: string; setHeader?: boolean },
    callback: (status: any, data: any) => void
  ) {
    const postOptions: any = {
      method: 'POST',
      responseType: 'json',
      headers: this.setHeader(options.setHeader || false),
      data: options.data,
    };
    if (options.url) {
      postOptions.url = options.url;
    }

    return this.api
      .request(postOptions)
      .then((response: any) => {
        callback(response.status, response.data);
      })
      .catch((error: any) => {
        if (error.response) {
          let description: string = error.response.statusText;
          toast.error(description);
          callback(error.response.status, error.response.data);
        } else {
          toast.warn('NETWORKING_PROBLEM_DESCRIPTION');
          callback(error.response.status, error.response.data);
        }
      });
  }

  get(
    options: { data: any; url?: string; setHeader?: boolean },
    callback: (status: any, data: any) => void
  ) {
    const getOptions: any = {
      method: 'GET',
      responseType: 'json',
      headers: this.setHeader(
        options.setHeader === undefined ? false : options.setHeader
      ),
      params: options.data,
    };
    if (options.url) {
      getOptions.url = options.url;
    }
    return this.api
      .request(getOptions)
      .then((response: any) => {
        callback(response.status, response.data);
      })
      .catch((error: any) => {
        if (error.response) {
          let message: string = error.response.statusText;
          toast.error(message);
          callback(error.response.status, error.response.data);
        } else {
          toast.warn('NETWORKING_PROBLEM_DESCRIPTION');
          callback(0, 'ERR_CONNECTION_REFUSED');
        }
      });
  }

  translateHttpCode(code: number) {
    let text = '';
    switch (code) {
      case 202:
        text = 'ACCEPTED';
        break;
      case 502:
        text = 'BAD_GATEWAY';
        break;
      case 400:
        text = 'BAD_REQUEST';
        break;
      case 409:
        text = 'CONFLICT';
        break;
      case 100:
        text = 'CONTINUE';
        break;
      case 201:
        text = 'CREATED';
        break;
      case 417:
        text = 'EXPECTATION_FAILED';
        break;
      case 424:
        text = 'FAILED_DEPENDENCY';
        break;
      case 403:
        text = 'FORBIDDEN';
        break;
      case 504:
        text = 'GATEWAY_TIMEOUT';
        break;
      case 410:
        text = 'GONE';
        break;
      case 505:
        text = 'HTTP_VERSION_NOT_SUPPORTED';
        break;
      case 418:
        text = 'IM_A_TEAPOT';
        break;
      case 419:
        text = 'INSUFFICIENT_SPACE_ON_RESOURCE';
        break;
      case 507:
        text = 'INSUFFICIENT_STORAGE';
        break;
      case 500:
        text = 'INTERNAL_SERVER_ERROR';
        break;
      case 411:
        text = 'LENGTH_REQUIRED';
        break;
      case 423:
        text = 'LOCKED';
        break;
      case 420:
        text = 'METHOD_FAILURE';
        break;
      case 405:
        text = 'METHOD_NOT_ALLOWED';
        break;
      case 301:
        text = 'MOVED_PERMANENTLY';
        break;
      case 302:
        text = 'MOVED_TEMPORARILY';
        break;
      case 207:
        text = 'MULTI_STATUS';
        break;
      case 300:
        text = 'MULTIPLE_CHOICES';
        break;
      case 511:
        text = 'NETWORK_AUTHENTICATION_REQUIRED';
        break;
      case 204:
        text = 'NO_CONTENT';
        break;
      case 203:
        text = 'NON_AUTHORITATIVE_INFORMATION';
        break;
      case 406:
        text = 'NOT_ACCEPTABLE';
        break;
      case 404:
        text = 'NOT_FOUND';
        break;
      case 501:
        text = 'NOT_IMPLEMENTED';
        break;
      case 304:
        text = 'NOT_MODIFIED';
        break;
      case 200:
        text = 'OK';
        break;
      case 206:
        text = 'PARTIAL_CONTENT';
        break;
      case 402:
        text = 'PAYMENT_REQUIRED';
        break;
      case 308:
        text = 'PERMANENT_REDIRECT';
        break;
      case 412:
        text = 'PRECONDITION_FAILED';
        break;
      case 428:
        text = 'PRECONDITION_REQUIRED';
        break;
      case 102:
        text = 'PROCESSING';
        break;
      case 407:
        text = 'PROXY_AUTHENTICATION_REQUIRED';
        break;
      case 431:
        text = 'REQUEST_HEADER_FIELDS_TOO_LARGE';
        break;
      case 408:
        text = 'REQUEST_TIMEOUT';
        break;
      case 413:
        text = 'REQUEST_TOO_LONG';
        break;
      case 414:
        text = 'REQUEST_URI_TOO_LONG';
        break;
      case 416:
        text = 'REQUESTED_RANGE_NOT_SATISFIABLE';
        break;
      case 205:
        text = 'RESET_CONTENT';
        break;
      case 303:
        text = 'SEE_OTHER';
        break;
      case 503:
        text = 'SERVICE_UNAVAILABLE';
        break;
      case 101:
        text = 'SWITCHING_PROTOCOLS';
        break;
      case 307:
        text = 'TEMPORARY_REDIRECT';
        break;
      case 429:
        text = 'TOO_MANY_REQUESTS';
        break;
      case 401:
        text = 'UNAUTHORIZED';
        break;
      case 422:
        text = 'UNPROCESSABLE_ENTITY';
        break;
      case 415:
        text = 'UNSUPPORTED_MEDIA_TYPE';
        break;
      case 305:
        text = 'USE_PROXY';
        break;
      default:
        text = 'UNKNOWN_SERVER_ERROR';
    }
    return text;
  }
}

export default new Api();

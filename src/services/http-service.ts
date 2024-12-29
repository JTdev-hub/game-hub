import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";
import { FetchResponse } from "./fetch-response";

class HttpService {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient
      .get<FetchResponse<T>>(this.endpoint, {
        signal: controller.signal,
        ...this.requestConfig,
      })
      .then((response) => response.data);

    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string, requestConfig?: AxiosRequestConfig) =>
  new HttpService(endpoint, requestConfig);

export default create;

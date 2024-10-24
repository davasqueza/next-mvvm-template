import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import { HttpService } from './http.interface';

@injectable()
export class AxiosHttpService implements HttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
  }

  get<T = unknown>(url: string, config?: axios.AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config);
  }

  patch<T = unknown, D = unknown>(url: string, data?: D, config?: axios.AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.patch(url, data, config);
  }

  post<T = unknown, D = unknown>(url: string, data?: D, config?: axios.AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post(url, data, config);
  }

  put<T = unknown, D = unknown>(url: string, data?: D, config?: axios.AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put(url, data, config);
  }

  delete<T = unknown>(url: string, config?: axios.AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete(url, config);
  }
}

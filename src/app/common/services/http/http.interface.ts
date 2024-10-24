import { interfaces } from 'inversify';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpService {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  post<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  put<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  patch<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
}

export const HttpServiceToken: interfaces.ServiceIdentifier<HttpService> = Symbol('HttpService');

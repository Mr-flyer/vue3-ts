import type { AxiosRequestConfig as C, IResponse } from "axios";
import { Service } from "./service";
import { stringify } from "qs";
import { pickBy } from "lodash-es";

class Request extends Service {
  constructor() {
    super({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 10 * 1000,
      paramsSerializer: (params) => {
        params = pickBy(params, (val) => ![null, ""].includes(val));
        return stringify(params, { arrayFormat: "indices" });
      }
    });
  }
  request<T = any, R = IResponse<T>>(option: C): Promise<R> {
    return Service.instance<unknown, R>(option);
  }
  get<T = any, R = IResponse<T>>(option: C): Promise<R> {
    return Service.instance<unknown, R>({ method: "GET", ...(option) });
  }
  post<T = any, R = IResponse<T>>(option: C): Promise<R> {
    return Service.instance<unknown, R>({ method: "POST", ...(option) });
  }
  delete<T = any, R = IResponse<T>>(option: C): Promise<R> {
    return Service.instance<unknown, R>({ method: "DELETE", ...(option) });
  }
  put<T = any, R = IResponse<T>>(option: C): Promise<R> {
    return Service.instance<unknown, R>({ method: "PUT", ...(option) });
  }
  download<T = any, R = IResponse<T>>(option: C) {
    return Service.instance<unknown, R>({ method: "GET", responseType: "blob", ...option });
  }
}

export default new Request();

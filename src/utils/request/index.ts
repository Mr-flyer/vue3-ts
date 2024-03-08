import type { AxiosRequestConfig as C, IResponse } from "axios";
import { Service } from "./service";
import { stringify } from "qs";
import { pickBy } from "lodash-es";
// import utils from "axios/unsafe/utils";
// import bind from "axios/unsafe/helpers/bind";

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
    option.method = "GET";
    return Service.instance<unknown, R>(option);
  }
  post<T = any, R = IResponse<T>>(option: C): Promise<R> {
    option.method = "POST";
    return Service.instance<unknown, R>(option);
  }
  delete<T = any, R = IResponse<T>>(option: C): Promise<R> {
    option.method = "DELETE";
    return Service.instance<unknown, R>(option);
  }
  put<T = any, R = IResponse<T>>(option: C): Promise<R> {
    option.method = "PUT";
    return Service.instance<unknown, R>(option);
  }
  download<T = any, R = IResponse<T>>(option: C) {
    option.method = "GET";
    option.responseType = "blob";
    return Service.instance<unknown, R>(option);
  }
}
export default new Request();

// function createInstance() {
//   const context = new Request();
//   const instance = bind(Request.prototype.request, context);

//   // Copy axios.prototype to instance
//   utils.extend(instance, Request.prototype, context, { allOwnKeys: true });

//   // Copy context to instance
//   utils.extend(instance, context, null, { allOwnKeys: true });

//   // Factory for creating new instances
//   // instance.create = function create(instanceConfig) {
//   //   return createInstance(mergeConfig(defaultConfig, instanceConfig));
//   // };

//   return instance;
// }
// export default createInstance();

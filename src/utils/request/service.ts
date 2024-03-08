// ts声明
import type {
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  IResponse,
  InternalAxiosRequestConfig
} from "axios";
import axios from "axios";
// 工具
import { Session } from "@/utils/storage";
import { SERVICE_CODE } from "./errCode";

export class Service {
  /**业务异常码 */
  static SERVICE_CODE = SERVICE_CODE;
  static instance: AxiosInstance;
  constructor(defaultConfig: CreateAxiosDefaults<any>) {
    // 创建一个 axios 实例
    Service.instance = axios.create(defaultConfig);
    this.#setInterceptors();
  }
  /**设置拦截器 */
  #setInterceptors() {
    /**
     * Axios请求拦截器，对请求进行处理
     * @param config InternalAxiosRequestConfig对象，包含请求配置信息
     */
    Service.instance.interceptors.request.use(
      (config) => {
        // 统一增加Authorization请求头, skipToken 跳过增加token
        const { skipToken } = config;
        const token = Session.getToken();
        if (skipToken && token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        // 处理完毕，返回config对象
        return config;
      },
      // 对请求错误进行处理
      (err) => Promise.reject(err)
    );

    /**
     * 响应拦截器处理函数
     * @param response 响应结果
     */
    Service.instance.interceptors.response.use(
      (response) => {
        const { data: sourceData, config, request } = response;
        // 文件下载
        if (["blob", "arraybuffer"].includes(request.responseType)) {
          return this.#downloadFile(response);
        }

        // 数据校验
        // const isObject = sourceData.toString().match(/\[object (.*)\]/)![1] === "Object";
        // if (!isObject) return ElNotification.error({ title: "数据异常请稍后再试" });

        // 针对code码处理错误
        const { code } = sourceData;
        if (code === 0) return sourceData;
        this.#onGeneralError(sourceData, config);
        return Promise.reject(sourceData);
      },
      (error) => {
        // 网络错误处理
        this.#onNetworkError(error);
        return Promise.reject(error);
      }
    );
  }
  /** 文件下载 */
  async #downloadFile({ data, config, headers }: AxiosResponse) {
    if (data.type.startsWith("application/json")) {
      /** 返回 JSON 数据 */
      data = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsText(data, "utf-8");
        reader.onloadend = function () {
          resolve(JSON.parse(typeof reader.result === "string" ? reader.result : ""));
        };
      });
    } else {
      /** 返回文件流 */
      const blob = new Blob([data]);
      // 本地保存文件
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      // 案例 filename=%E5%AF%BC%E5%87%BA%E6%95%B0%E6%8D%AE.xlsx
      const filename = headers["content-disposition"].split("=")[1];
      link.setAttribute("download", decodeURI(filename));
      document.body.appendChild(link);
      link.click();
    }
    return data;
  }
  /**
   * 常规错误处理
   * @param sourceData 数据源
   * @param config 请求配置
   */
  async #onGeneralError(sourceData: IResponse, config: InternalAxiosRequestConfig) {
    const { msg: errMsg, code: errCode } = sourceData;
    if (!config.isHideAuth && errCode == 401) {
      // token令牌过期
      await ElMessageBox.confirm("登录状态已过期，您可以继续留在该页面，或者重新登录", "系统提示", {
        confirmButtonText: "重新登录",
        cancelButtonText: "取消",
        type: "warning"
      });
      // await useUserStore().logOut();
      location.href = "#/login";
    } else if (!config.isHideMsg) {
      // 业务code错误处理
      const MSG = Service.SERVICE_CODE.get(errCode);
      if (import.meta.env.DEV) {
        // 非生产环境使用通知窗提示错误
        ElNotification.error({
          title: "接口错误",
          message: `${config.url} 》${MSG ?? errMsg}`
        });
      } else {
        // @ts-ignore
        ElMessage.error(MSG ?? (errMsg || Service.SERVICE_CODE.get()));
      }
    }
  }
  /**
   * 网络错误处理
   * @param param0 异常对象
   */
  #onNetworkError({ errMsg }: any) {
    if (errMsg == "Network Error") {
      errMsg = "后端接口连接异常";
    } else if (errMsg.includes("timeout")) {
      errMsg = "系统接口请求超时";
    } else if (errMsg.includes("Request failed with status code")) {
      errMsg = "系统接口" + errMsg.substr(errMsg.length - 3) + "异常";
    }
    ElMessage.error(errMsg);
  }
}

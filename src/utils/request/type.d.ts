import "axios";

declare module "axios" {
  interface AxiosRequestConfig {
    /** 隐藏报错提示 */
    isHideMsg?: boolean;
    /** 跳过携带token */
    skipToken?: boolean;
    /** 开启文件下载 */
    downloadFile?: boolean;
    /**token实效是否开启鉴权弹窗 */
    isHideAuth?: boolean;
  }
  /**常规响应数据结构 */
  export interface IResponse<T = any> {
    code: number;
    data: T;
    msg: string;
    // 列表独有
    rows: T[];
    total: number;
  }
  /**验证码独有响应 */
  export interface ICaptchaResponse<T = any> {
    code: number;
    msg: string;
    captchaOnOff?: boolean;
    img: string;
    uuid: string;
  }
  /**登录独有响应 */
  export interface ILoginResponse<T = any> {
    code: number;
    msg: string;
    access_token: string;
    refresh_token: string;
  }
  /**用户详情独有响应 */
  export interface IUserInfoResponse<T = any> {
    code: number;
    msg: string;
    permissions: any[];
    /**权限列表 */
    roles: string[];
    /**用户信息 */
    // user: IUserInfo;
  }
}

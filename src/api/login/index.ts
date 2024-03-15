import type { ILoginResponse } from "axios";
// 工具
import request from "@/utils/request";
import { Session } from "@/utils/storage";
import { encryption } from "@/utils/other";
import { omit } from "lodash-es";

/**登录 */
export const login = (data: any) => {
  const basicAuth = "Basic " + window.btoa(import.meta.env.VITE_OAUTH2_PASSWORD_CLIENT);
  Session.set("basicAuth", basicAuth);
  // 密码加密
  const encPassword = encryption(data.password, import.meta.env.VITE_PWD_ENC_KEY);
  const params = omit(data, "password");
  return request.post<unknown, ILoginResponse>({
    url: "/admin/oauth2/token",
    params,
    skipToken: true,
    data: { password: encPassword },
    headers: { Authorization: basicAuth }
  });
};

/**获取用户信息 */
export const getUserInfo = () => {
  return request.get({ url: "/admin/user/info" });
};

import { getUserInfo, login } from "@/api/login/index";
import { Session } from "@/utils/storage";
export const useUserInfo = defineStore("userInfo", {
  state: (): UserInfosState => ({
    userInfos: {
      userName: "",
      photo: "",
      time: 0,
      roles: [],
      authBtnList: []
    }
  }),
  actions: {
    /**
     * 登录方法
     * @param data
     */
    async login(data: any) {
      data.grant_type = "password";
      data.scope = "server";
      const { access_token, refresh_token } = await login(data);
      Session.set("token", access_token);
      Session.set("refresh_token", refresh_token);
    },
    /**
     * 获取用户信息
     */
    async setUserInfos() {
      const { data } = await getUserInfo();
      const userInfo = {
        user: data.sysUser,
        time: new Date().getTime(),
        roles: data.roles,
        authBtnList: data.permissions
      };
      Object.assign(this.userInfos, userInfo);
    }
  }
});

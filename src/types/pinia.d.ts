/**pinia 定义 */

/**用户信息 */
declare interface UserInfosState<T = any> {
  userInfos: {
    userName: string;
    photo: string;
    time: number;
    roles: string[];
    authBtnList: string[];
    [key: string]: T;
  };
}

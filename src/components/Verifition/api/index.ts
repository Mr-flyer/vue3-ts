/**
 * 此处可直接引用自己项目封装好的 axios 配合后端联调
 */

import request from "@/utils/request";

//获取验证图片  以及token
export function reqGet(data: any) {
  return request.get({
    url: "/admin/code/create",
    data
  });
}

//滑动或者点选验证
export function reqCheck(data: any) {
  return request.post({
    url: "/admin/code/check",
    params: data
  });
}

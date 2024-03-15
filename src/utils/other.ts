import * as CryptoJS from "crypto-js";

/**
 *加密处理
 */
export function encryption(src: string, keyWord: string) {
  const key = CryptoJS.enc.Utf8.parse(keyWord);
  // 加密
  const encrypted = CryptoJS.AES.encrypt(src, key, {
    iv: key,
    mode: CryptoJS.mode.CFB,
    padding: CryptoJS.pad.NoPadding
  });
  return encrypted.toString();
}

/**
 *  解密
 * @param {*} params 参数列表
 * @returns 明文
 */
export function decryption(src: string, keyWord: string) {
  const key = CryptoJS.enc.Utf8.parse(keyWord);
  // 解密逻辑
  const decryptd = CryptoJS.AES.decrypt(src, key, {
    iv: key,
    mode: CryptoJS.mode.CFB,
    padding: CryptoJS.pad.NoPadding
  });

  return decryptd.toString(CryptoJS.enc.Utf8);
}

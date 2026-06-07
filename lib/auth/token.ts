import { getStorageItem, setStorageItem, removeStorageItem } from "./storage";

const TOKEN_KEY = "access_token";

export function saveToken(token: string) {
  setStorageItem(TOKEN_KEY, token);
}

export function getToken() {
  return getStorageItem(TOKEN_KEY);
}

export function removeToken() {
  removeStorageItem(TOKEN_KEY);
}

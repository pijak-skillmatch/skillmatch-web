import { User } from "@/types/auth";

import { getStorageItem, setStorageItem, removeStorageItem } from "./storage";

const USER_KEY = "current_user";

export function saveUser(user: User) {
  setStorageItem(USER_KEY, JSON.stringify(user));
}

export function getUser(): User | null {
  const data = getStorageItem(USER_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export function removeUser() {
  removeStorageItem(USER_KEY);
}

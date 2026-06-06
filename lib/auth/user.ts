import { User } from "@/types/auth";

const USER_KEY = "current_user";

export function saveUser(user: User) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
  const data = localStorage.getItem(USER_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export function removeUser() {
  localStorage.removeItem(USER_KEY);
}

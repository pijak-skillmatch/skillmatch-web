import { getToken } from "./token";

export function isAuthenticated() {
  return !!getToken();
}

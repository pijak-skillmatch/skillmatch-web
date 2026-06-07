import { removeToken } from "./token";

import { removeUser } from "./user";

import { removeStorageItem } from "./storage";

export function logout() {
  removeToken();

  removeUser();

  removeStorageItem("analysis_result");

  removeStorageItem("selected_skills");

  removeStorageItem("experience_level");

  removeStorageItem("analysis_mode");
}

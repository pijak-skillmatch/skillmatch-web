import { removeToken } from "./token";
import { removeUser } from "./user";

export function logout() {
  removeToken();

  removeUser();

  localStorage.removeItem("analysis_result");

  localStorage.removeItem("selected_skills");

  localStorage.removeItem("experience_level");
}

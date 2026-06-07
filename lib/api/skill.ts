import { API_BASE_URL } from "./config";

export async function getSkills() {
  const response = await fetch(`${API_BASE_URL}/skills`);

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
}

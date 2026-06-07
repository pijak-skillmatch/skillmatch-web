import { API_BASE_URL } from "./config";

export async function analyzeResume(file: File, experience: string) {
  const formData = new FormData();

  formData.append("resume", file);

  formData.append("experience", experience);

  const response = await fetch(`${API_BASE_URL}/resume/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Resume analysis failed");
  }

  return response.json();
}

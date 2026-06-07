import { API_BASE_URL } from "./config";

export interface AnalyzeRequest {
  skills: string[];
  experience: string;
}

export async function analyzeProfile(payload: AnalyzeRequest) {
  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze profile");
  }

  return response.json();
}

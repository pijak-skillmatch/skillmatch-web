const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface AnalyzeRequest {
  skills: string[];
  experience: string;
}

export async function analyzeProfile(payload: AnalyzeRequest) {
  const response = await fetch(`${API_URL}/api/v1/analyze`, {
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

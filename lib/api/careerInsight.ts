import { HistoryDetail } from "@/types/history";

import { CareerInsight } from "@/types/careerInsight";

export async function generateCareerInsight(oldReport: HistoryDetail, newReport: HistoryDetail): Promise<CareerInsight> {
  const response = await fetch("/api/ai/career-insight", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      oldReport,
      newReport,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate insight");
  }

  return response.json();
}

import { HistoryDetail } from "@/types/history";

import { AnalyzeResponse } from "@/types/analysis";

export function transformHistoryToAnalysis(history: HistoryDetail): AnalyzeResponse {
  return {
    success: true,

    data: {
      industry_predictions: history.result_json.industry_predictions as never,

      recommended_skills: history.result_json.recommended_skills as never,

      learning_path: history.result_json.learning_path as never,
    },
  };
}

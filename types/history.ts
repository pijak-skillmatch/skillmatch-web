export interface SaveHistoryPayload {
  analysis_type: string;

  industry: string;

  confidence: number;

  input_skills: string[];

  result_json: Record<string, unknown>;
}

export interface HistoryItem {
  id: number;

  analysis_type: string;

  industry: string;

  confidence: number;

  created_at: string;
}

export interface HistoryDetail {
  id: number;

  analysis_type: string;

  industry: string;

  confidence: number;

  input_skills: string[];

  result_json: Record<string, unknown>;

  created_at: string;
}

export interface SaveHistoryResponse {
  success: boolean;

  message: string;

  data: {
    id: number;
  };
}

export interface DeleteHistoryResponse {
  success: boolean;

  message: string;
}

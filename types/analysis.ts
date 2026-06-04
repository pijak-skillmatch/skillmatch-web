export interface IndustryPrediction {
  industry: string;
  probability: number;
}

export interface SkillRecommendation {
  skill: string;
  score: number;
  reasons: string[];
}

export interface LearningPathItem {
  level: string;
  skills: string[];
}

export interface AnalysisData {
  industry_predictions: IndustryPrediction[];
  recommended_skills: SkillRecommendation[];
  learning_path: LearningPathItem[];
}

export interface AnalyzeResponse {
  success: boolean;
  data: AnalysisData;
}

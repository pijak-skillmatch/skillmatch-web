export interface ResumeAnalyzeResponse {
  success: boolean;

  data: {
    detected_skills: string[];

    industry_predictions: {
      industry: string;
      probability: number;
    }[];

    recommended_skills: {
      skill: string;
      score: number;
      reasons: string[];
    }[];

    learning_path: {
      level: string;
      skills: string[];
    }[];
  };
}

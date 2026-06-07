export interface DashboardPdfData {
  industry: string;

  confidence: number;

  inputSkills: string[];

  resultJson: {
    industry_predictions: {
      industry: string;
      probability: number;
    }[];

    recommended_skills: {
      skill: string;
      score?: number;
    }[];

    learning_path: {
      level: string;
      skills: string[];
    }[];
  };
}

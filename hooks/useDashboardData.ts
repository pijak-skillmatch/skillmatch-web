"use client";

import { useEffect, useState } from "react";

import { AnalyzeResponse } from "@/types/analysis";

export function useDashboardData() {
  const [result, setResult] = useState<AnalyzeResponse | null>(null);

  const [userSkills, setUserSkills] = useState<string[]>([]);

  useEffect(() => {
    const savedResult = localStorage.getItem("analysis_result");

    const savedSkills = localStorage.getItem("selected_skills");

    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }

    if (savedSkills) {
      setUserSkills(JSON.parse(savedSkills));
    }
  }, []);

  return {
    result,
    userSkills,
  };
}

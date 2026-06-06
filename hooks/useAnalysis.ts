"use client";

import { useEffect, useState } from "react";

import { getSkills } from "@/lib/api/skill";

import { SkillsResponse } from "@/types/skill";

export function useAnalysis() {
  const [availableSkills, setAvailableSkills] = useState<string[]>([]);

  const [isLoadingSkills, setIsLoadingSkills] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response: SkillsResponse = await getSkills();

        setAvailableSkills(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingSkills(false);
      }
    };

    loadSkills();
  }, []);

  return {
    availableSkills,
    isLoadingSkills,
  };
}

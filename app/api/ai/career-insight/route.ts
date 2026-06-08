import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { oldReport, newReport } = body;

    const prompt = `
You are an expert AI Career Coach.

Compare these two career reports.

OLD REPORT:
${JSON.stringify(oldReport, null, 2)}

NEW REPORT:
${JSON.stringify(newReport, null, 2)}

Analyze the user's career progression.

Return ONLY valid JSON.

Format:

{
  "score": 0,
  "summary": "",
  "improvements": [],
  "risks": [],
  "next_skills": []
}

Rules:

- score must be between 0 and 100
- summary maximum 80 words
- improvements maximum 5 items
- risks maximum 3 items
- next_skills maximum 5 items
- output raw JSON only
- no markdown
- no code block
- no explanation
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

    const rawText = response.text ?? "";

    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    if (!cleanedText) {
      throw new Error("Gemini returned empty response");
    }

    const parsed = JSON.parse(cleanedText);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Career Insight Error:", error);

    return NextResponse.json(
      {
        score: 50,

        summary: "Unable to generate AI career insight at this time.",

        improvements: [],

        risks: [],

        next_skills: [],
      },
      {
        status: 200,
      },
    );
  }
}

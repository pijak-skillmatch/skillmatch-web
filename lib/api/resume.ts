const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function analyzeResume(file: File, experience: string) {
  const formData = new FormData();

  formData.append("resume", file);

  formData.append("experience", experience);

  const response = await fetch(`${API_URL}/api/v1/resume/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Resume analysis failed");
  }

  return response.json();
}

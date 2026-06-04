const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSkills() {
  const response = await fetch(`${API_URL}/api/v1/skills`);

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
}

import { getToken } from "@/lib/auth/token";

import { API_BASE_URL } from "./config";

import { SaveHistoryPayload, SaveHistoryResponse, HistoryItem, HistoryDetail, DeleteHistoryResponse } from "@/types/history";

export async function saveHistory(payload: SaveHistoryPayload): Promise<SaveHistoryResponse> {
  const token = getToken();

  const response = await fetch(`${API_BASE_URL}/history`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();

    console.error("History API Error:", errorData);

    throw new Error(errorData.detail ?? "Failed to save history");
  }

  return response.json();
}

export async function getHistories(): Promise<HistoryItem[]> {
  const token = getToken();

  const response = await fetch(`${API_BASE_URL}/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  return response.json();
}

export async function getHistoryById(id: number): Promise<HistoryDetail> {
  const token = getToken();

  const response = await fetch(`${API_BASE_URL}/history/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch history detail");
  }

  return response.json();
}

export async function deleteHistory(id: number): Promise<DeleteHistoryResponse> {
  const token = getToken();

  const response = await fetch(`${API_BASE_URL}/history/${id}`, {
    method: "DELETE",

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete history");
  }

  return response.json();
}

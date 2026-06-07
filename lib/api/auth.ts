import { LoginRequest, RegisterRequest, TokenResponse, User } from "@/types/auth";
import { API_BASE_URL } from "./config";

export async function register(payload: RegisterRequest) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
}

export async function login(payload: LoginRequest): Promise<TokenResponse> {
  const formData = new URLSearchParams();

  formData.append("username", payload.email);

  formData.append("password", payload.password);

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export async function getCurrentUser(token: string): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unauthorized");
  }

  return response.json();
}

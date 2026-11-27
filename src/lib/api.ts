import { authClient } from "./auth-client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(path: string, options: RequestInit = {}) {
  const { data } = await authClient.token();

  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  if (data?.token) {
    headers.set("Authorization", `Bearer ${data.token}`);
  }

  return fetch(`${API_URL}${path}`, { ...options, headers });
}
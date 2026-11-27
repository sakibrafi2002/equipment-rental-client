export type Role = "customer" | "owner" | "admin";

export function getDashboardPath(role?: string | null): string {
  if (role === "admin") return "/dashboard/admin";
  if (role === "owner") return "/dashboard/owner";
  return "/dashboard/customer";
}
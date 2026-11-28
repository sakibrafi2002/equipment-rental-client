import AuthGuard from "@/components/auth-guard";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard role="customer">{children}</AuthGuard>;
}
import AuthGuard from "@/components/auth-guard";

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard role="owner">{children}</AuthGuard>;
}
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { getDashboardPath, type Role } from "@/lib/roles";

export default function AuthGuard({
  role,
  children,
}: {
  role?: Role;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const allowed = !!session && (!role || session.user.role === role);

  useEffect(() => {
    if (isPending) return;

    if (!session) {
      const next = encodeURIComponent(window.location.pathname);
      router.replace(`/login?redirect=${next}`);
    } else if (role && session.user.role !== role) {
      router.replace(getDashboardPath(session.user.role));
    }
  }, [isPending, session, role, router]);

  if (!allowed) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
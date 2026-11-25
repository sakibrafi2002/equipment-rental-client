"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function SessionDebug() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <p>Loading...</p>;
  if (!session) return <p>Not logged in</p>;

  return (
    <div className="space-y-2">
      <p>
        {session.user.name} ({session.user.email})
      </p>
      <p>Role: {session.user.role}</p>
      <Button variant="outline" onClick={() => authClient.signOut()}>
        Sign out
      </Button>
    </div>
  );
}
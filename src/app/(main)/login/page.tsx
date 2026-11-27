"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { getDashboardPath } from "@/lib/roles";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoogleSignInButton from "@/components/google-sign-in-button";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed.");
      return;
    }

    toast.success("Login successful!");
    router.push(getDashboardPath(data?.user.role));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    login(String(form.get("email")), String(form.get("password")));
  };

  return (
    <div className="flex items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Log in to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">or</div>
          <GoogleSignInButton />

          <div className="space-y-2 rounded-lg border p-4">
            <p className="text-sm font-medium">Quick login (demo accounts)</p>
            {DEMO_ACCOUNTS.map((account) => (
              <Button
                key={account.role}
                type="button"
                variant="secondary"
                className="h-auto w-full flex-col items-start gap-0.5 py-2"
                disabled={loading}
                onClick={() => login(account.email, account.password)}
              >
                <span>Login as {account.label}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {account.email} / {account.password}
                </span>
              </Button>
            ))}
          </div>

          <p className="text-center text-sm">
            New here?{" "}
            <Link href="/register" className="font-medium underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
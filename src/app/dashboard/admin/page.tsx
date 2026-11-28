import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function AdminDashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Admin dashboard (coming soon)</h1>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Back to home
      </Link>
    </main>
  );
}
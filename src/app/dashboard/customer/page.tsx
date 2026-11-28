import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const instant = false;

export default function CustomerDashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Customer dashboard (coming soon)</h1>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Back to home
      </Link>
    </main>
  );
}
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Equipment Rental Platform</h1>
      <div className="flex gap-3">
        <Link href="/login" className={buttonVariants()}>
          Login
        </Link>
        <Link href="/register" className={buttonVariants({ variant: "outline" })}>
          Register
        </Link>
      </div>
    </main>
  );
}
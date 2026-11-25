import GoogleSignInButton from "@/components/google-sign-in-button";
import SessionDebug from "@/components/session-debug";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-6 text-center">
        <h1 className="text-3xl font-bold">Equipment Rental Platform</h1>
        <GoogleSignInButton />
        <SessionDebug />
      </div>
    </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Wrench } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { getDashboardPath } from "@/lib/roles";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/equipment", label: "All Equipment" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/how-it-works", label: "How It Works" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleLogout = async () => {
    await authClient.signOut();
    setMenuOpen(false);
    toast.success("Logged out successfully.");
    router.push("/");
  };

  const authButtons = isPending ? null : session ? (
    <>
      <Link
        href={getDashboardPath(session.user.role)}
        onClick={() => setMenuOpen(false)}
        className={buttonVariants({ variant: "outline" })}
      >
        Dashboard
      </Link>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  ) : (
    <>
      <Link
        href="/login"
        onClick={() => setMenuOpen(false)}
        className={buttonVariants({ variant: "outline" })}
      >
        Login
      </Link>
      <Link
        href="/register"
        onClick={() => setMenuOpen(false)}
        className={buttonVariants()}
      >
        Register
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Wrench className="h-6 w-6 text-primary" />
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">{authButtons}</div>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{SITE_NAME}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "text-base font-medium",
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 px-4">{authButtons}</div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
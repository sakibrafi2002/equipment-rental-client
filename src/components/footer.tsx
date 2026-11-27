import Link from "next/link";
import { Mail, MapPin, Phone, Wrench } from "lucide-react";
import {
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_TAGLINE,
  SITE_X_URL,
} from "@/lib/site";

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/equipment", label: "All Equipment" },
  { href: "/about", label: "About Us" },
];

const SUPPORT_LINKS = [
  { href: "/contact", label: "Contact Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/login", label: "Login" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Wrench className="h-6 w-6 text-primary" />
            {SITE_NAME}
          </Link>
          <p className="text-sm text-muted-foreground">{SITE_TAGLINE}</p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Support</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {SITE_EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {SITE_PHONE}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {SITE_ADDRESS}
            </li>
          </ul>
          <a
            href={SITE_X_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:text-primary"
          >
            <XLogo className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        &copy; {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
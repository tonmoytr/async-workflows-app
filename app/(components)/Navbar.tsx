"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Comments", href: "/contact/comments" },
  { label: "Payment", href: "/payments/client-table" },
  { label: "Suspense-Demo", href: "/suspense-demo" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={buttonVariants({
                  variant: "ghost",
                  className: "text-sm font-medium",
                })}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

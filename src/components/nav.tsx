"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { THEME_META, type Theme } from "@/lib/themes";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/games", label: "Games" },
];

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "theme-heading rounded-md px-3 py-1.5 text-sm transition-colors",
        active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function Nav({ theme }: { theme: Theme }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const label = THEME_META[theme].label;

  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-2 gap-y-2 px-6 py-4 text-sm">
        <Link href="/" className="theme-heading mr-2 font-semibold">
          Lincoln Nordquist
        </Link>
        {links.map((link) => (
          <NavLink key={link.href} {...link} active={isActive(link.href)} />
        ))}
        <span className="ml-auto rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {label}
        </span>
      </nav>
    </header>
  );
}

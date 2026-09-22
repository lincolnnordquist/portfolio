"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-context"
import { THEMES } from "@/lib/themes"

const PRO_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
]

const FUN_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/games", label: "Games" },
]

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string
  label: string
  active: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "theme-heading rounded-md px-3 py-1.5 text-sm transition-colors",
        active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/60",
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  )
}

export function NavBar() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const label = THEMES[theme].label

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3">
        <Link
          href="/"
          className="theme-heading text-base font-bold tracking-tight text-foreground"
        >
          Alex Rivera
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {PRO_LINKS.map((l) => (
            <NavLink key={l.href} {...l} active={isActive(l.href)} />
          ))}
          <span className="mx-2 h-5 w-px bg-border" aria-hidden />
          {FUN_LINKS.map((l) => (
            <NavLink key={l.href} {...l} active={isActive(l.href)} />
          ))}
          {label && (
            <span className="ml-2 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {label}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <p className="px-3 pb-1 text-xs uppercase tracking-wider text-muted-foreground">
              Professional
            </p>
            {PRO_LINKS.map((l) => (
              <NavLink
                key={l.href}
                {...l}
                active={isActive(l.href)}
                onClick={() => setOpen(false)}
              />
            ))}
            <p className="px-3 pb-1 pt-3 text-xs uppercase tracking-wider text-muted-foreground">
              Personal
            </p>
            {FUN_LINKS.map((l) => (
              <NavLink
                key={l.href}
                {...l}
                active={isActive(l.href)}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

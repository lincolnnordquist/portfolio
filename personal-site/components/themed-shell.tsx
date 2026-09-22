"use client"

import { useTheme } from "@/components/theme-context"
import { NavBar } from "@/components/nav-bar"

export function ThemedShell({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <div
      data-theme={theme}
      className="theme-surface flex min-h-screen flex-col"
    >
      <NavBar />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row">
        <p className="theme-heading">Alex Rivera</p>
        <p>Built with Next.js. A quiet front door, a loud back room.</p>
      </div>
    </footer>
  )
}

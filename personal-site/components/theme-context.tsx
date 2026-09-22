"use client"

import { createContext, useContext } from "react"
import { usePathname } from "next/navigation"
import { getThemeForPath, type ThemeId } from "@/lib/themes"

type ThemeContextValue = {
  theme: ThemeId
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * The theme is resolved from the current route (see `getThemeForPath`), so it
 * is correct on the very first render with no flash — every page is themed,
 * and each section owns its theme.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const theme = getThemeForPath(pathname ?? "/")

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}

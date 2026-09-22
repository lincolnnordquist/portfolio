import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import {
  Inter,
  JetBrains_Mono,
  Press_Start_2P,
  VT323,
  Bangers,
  Oswald,
  Cinzel,
  EB_Garamond,
} from 'next/font/google'
import { ThemeProvider } from '@/components/theme-context'
import { ThemedShell } from '@/components/themed-shell'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
})
const vt323 = VT323({ weight: '400', subsets: ['latin'], variable: '--font-vt323' })
const bangers = Bangers({ weight: '400', subsets: ['latin'], variable: '--font-bangers' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' })

const fontVars = [
  inter.variable,
  jetbrainsMono.variable,
  pressStart.variable,
  vt323.variable,
  bangers.variable,
  oswald.variable,
  cinzel.variable,
  garamond.variable,
].join(' ')

export const metadata: Metadata = {
  title: 'Alex Rivera — Software Engineer',
  description:
    'Personal site of Alex Rivera: a clean professional front door, plus a playful, chameleon-like personal wing of writing and browser games.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${fontVars}`}>
      <body className="antialiased">
        <ThemeProvider>
          <ThemedShell>{children}</ThemedShell>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

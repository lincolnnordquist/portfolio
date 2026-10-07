import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Press_Start_2P,
  VT323,
  Bangers,
  Oswald,
  Cinzel,
  EB_Garamond,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

const fontVars = [
  inter.variable,
  jetbrainsMono.variable,
  pressStart.variable,
  vt323.variable,
  bangers.variable,
  oswald.variable,
  cinzel.variable,
  garamond.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Lincoln Nordquist",
  description: "Personal portfolio, blog, and games site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

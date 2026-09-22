import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const cinzelDecorative = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

const fontVars = [
  inter.variable,
  jetbrainsMono.variable,
  cinzelDecorative.variable,
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

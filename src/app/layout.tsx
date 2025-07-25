import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Js Multiple Themes Demo",
  description: "A demo showcasing multiple themes in Next.js using Tailwind css and shdcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="theme-red-light"
            enableSystem={false} 
            value={{
              light: "theme-blue-light",
              dark: "theme-blue-dark",
              "theme-blue-light": "theme-blue-light",
              "theme-blue-dark": "theme-blue-dark",
              "theme-red-light": "theme-red-light",
              "theme-red-dark": "theme-red-dark",
            }}
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

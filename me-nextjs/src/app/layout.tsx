import "@/styles/globals.css";
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rojas Developer",
  description: `Desarrollador de software Fullstack con javascript, html y css.
    Uso de frameworks y librerias, Angular, React, Express y ORMS para bases de datos
  `
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

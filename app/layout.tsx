import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Hello Worlds Dashboard",
  description: "Manage hello worlds"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        <main className="container mx-auto px-5 min-h-screen py-10">
          {children}
        </main>
      </body>
    </html>
  )
}

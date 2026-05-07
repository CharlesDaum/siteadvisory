import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AmbientBackground from '@/components/layout/AmbientBackground'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'NexIA Advisory — Conseil en Intelligence Artificielle',
    template: '%s | NexIA Advisory',
  },
  description:
    "Cabinet de conseil IA premium. Nous transformons l'IA en moteur de croissance durable pour les entreprises ambitieuses.",
  keywords: [
    'conseil IA',
    'intelligence artificielle',
    'transformation digitale',
    'LLM',
    'automatisation',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nexia-advisory.fr',
    siteName: 'NexIA Advisory',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'NexIA Advisory' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="noise-overlay relative flex min-h-screen flex-col font-body text-text-primary antialiased overflow-x-hidden bg-transparent">
        <AmbientBackground />

        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Navbar />
          <main className="flex-1 relative z-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

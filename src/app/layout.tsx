import type { Metadata } from 'next'
import { Instrument_Serif, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import SiteFooter from '@/components/layout/SiteFooter'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['300', '400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'NexIA Advisory — Cabinet IA Paris',
    template: '%s | NexIA Advisory',
  },
  description:
    "Cabinet de conseil spécialisé en intelligence artificielle. De l'audit stratégique au déploiement en production, nous transformons vos données en avantage compétitif.",
  keywords: ['conseil IA', 'intelligence artificielle', 'LLM', 'RAG', 'automatisation', 'Paris'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nexia-advisory.fr',
    siteName: 'NexIA Advisory',
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'NexIA Advisory' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="grain">
        <Navbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

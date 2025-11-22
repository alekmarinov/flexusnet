import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: 'Flexus Net - IT MSP Services | Nationwide Coverage',
  description: 'Professional IT and office technology services. Laptop installations, network setups, and POS systems. 100% nationwide coverage across 50 states.',
  keywords: 'IT services, MSP, network installation, POS systems, laptop installation, office technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable}`}>
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


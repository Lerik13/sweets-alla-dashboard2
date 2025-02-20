import { Inter } from 'next/font/google'
import '@/app/_styles/globals.css'
import Header from '@/app/_components/Header'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: {
    template: '%s / Sweets by Alla',
    default: 'Welcome / Sweets by Alla',
  },
  description: 'Dashboard for Catalog of Bakery Products - Sweets by Alla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-accent-50 text-primary-800 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'فروشگاه برنج رامضانی | خرید مستقیم برنج ایرانی',
  description: 'خرید آنلاین برنج ایرانی ممتاز با ارسال سریع و ضمانت کیفیت'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

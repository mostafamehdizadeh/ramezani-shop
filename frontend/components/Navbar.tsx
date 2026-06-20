'use client'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rice-green text-2xl text-rice-gold">🌾</div>
          <div>
            <div className="text-2xl font-black text-rice-green">برنج رامضانی</div>
            <div className="text-xs text-slate-500">Ramezani Rice Store</div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
          <a className="hover:text-rice-green" href="#products">محصولات</a>
          <a className="hover:text-rice-green" href="#features">مزایا</a>
          <a className="hover:text-rice-green" href="/admin">پنل مدیریت</a>
          <a className="hover:text-rice-green" href="#contact">تماس با ما</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-2xl bg-slate-100 p-3 text-slate-700 md:block"><Search size={20}/></button>
          <button className="rounded-2xl bg-slate-100 p-3 text-slate-700"><User size={20}/></button>
          <button className="relative rounded-2xl bg-rice-green p-3 text-white"><ShoppingCart size={20}/><span className="absolute -left-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-rice-gold text-xs text-rice-green">۲</span></button>
          <button className="rounded-2xl bg-slate-100 p-3 lg:hidden"><Menu size={20}/></button>
        </div>
      </div>
    </header>
  )
}

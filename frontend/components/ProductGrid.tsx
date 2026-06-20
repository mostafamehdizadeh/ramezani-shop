'use client'
import { ShoppingCart, Star } from 'lucide-react'

const products = [
  { id: 1, name: 'برنج طارم هاشمی ممتاز', price: 1680000, oldPrice: 1890000, weight: '۱۰ کیلوگرم', rating: 4.9, badge: 'پرفروش', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'برنج دودی رامضانی', price: 1840000, oldPrice: 2050000, weight: '۱۰ کیلوگرم', rating: 4.8, badge: 'ویژه', image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=900&q=80' },
  { id: 3, name: 'برنج سرلاشه معطر', price: 980000, oldPrice: 1150000, weight: '۱۰ کیلوگرم', rating: 4.6, badge: 'اقتصادی', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80' },
  { id: 4, name: 'برنج عنبربو جنوب', price: 1320000, oldPrice: 1490000, weight: '۱۰ کیلوگرم', rating: 4.7, badge: 'خوش‌عطر', image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a6?auto=format&fit=crop&w=900&q=80' }
]

export default function ProductGrid() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <span className="text-sm font-bold text-rice-gold">محصولات منتخب</span>
          <h2 className="mt-2 text-3xl font-black text-rice-green md:text-4xl">خرید برنج ایرانی رامضانی</h2>
        </div>
        <button className="hidden rounded-2xl border bg-white px-5 py-3 font-bold shadow-sm md:block">مشاهده همه</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-[2rem] bg-white shadow-soft transition hover:-translate-y-2">
            <div className="relative h-56 overflow-hidden bg-rice-cream">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute right-4 top-4 rounded-full bg-rice-gold px-3 py-1 text-xs font-black text-rice-green">{p.badge}</span>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">{p.weight}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-amber-500"><Star size={16} fill="currentColor"/> {p.rating.toLocaleString('fa-IR')}</span>
              </div>
              <h3 className="min-h-14 text-lg font-black text-slate-900">{p.name}</h3>
              <div className="mt-4">
                <div className="text-sm text-slate-400 line-through">{p.oldPrice.toLocaleString('fa-IR')} تومان</div>
                <div className="text-xl font-black text-rice-green">{p.price.toLocaleString('fa-IR')} تومان</div>
              </div>
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-rice-green px-4 py-3 font-black text-white transition hover:bg-emerald-800"><ShoppingCart size={18}/> افزودن به سبد</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

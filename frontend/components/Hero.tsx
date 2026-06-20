import { CheckCircle2, Truck, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rice-green via-emerald-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f4b942_0,transparent_30%),radial-gradient(circle_at_80%_30%,#fff_0,transparent_25%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative z-10">
          <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">خرید مستقیم از شالیزارهای شمال</span>
          <h1 className="text-4xl font-black leading-[1.4] md:text-6xl">عطر و طعم واقعی برنج ایرانی روی سفره شما</h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-white/80">فروشگاه برنج رامضانی، عرضه‌کننده برنج طارم، هاشمی، دودی و سرلاشه معطر با ضمانت کیفیت، ارسال سریع و بسته‌بندی استاندارد.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="rounded-2xl bg-rice-gold px-7 py-4 font-black text-rice-green shadow-lg transition hover:scale-105">مشاهده محصولات</a>
            <a href="/admin" className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20">ورود به پنل مدیریت</a>
          </div>
          <div className="mt-8 grid gap-3 text-sm md:grid-cols-3">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-rice-gold"/> ضمانت اصالت</div>
            <div className="flex items-center gap-2"><Truck className="text-rice-gold"/> ارسال سریع</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-rice-gold"/> پرداخت امن</div>
          </div>
        </div>
        <div className="relative z-10">
          <div className="rounded-[2.5rem] bg-white/10 p-4 shadow-2xl backdrop-blur">
            <img className="h-[420px] w-full rounded-[2rem] object-cover" src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80" alt="برنج ایرانی" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { BarChart3, Package, Settings } from 'lucide-react'

export default function AdminPreview() {
  return (
    <section className="bg-rice-cream py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-bold text-rice-gold">پنل مدیریت</span>
          <h2 className="mt-2 text-3xl font-black text-rice-green">مدیریت سفارش، موجودی و فروش</h2>
          <p className="mt-4 leading-8 text-slate-600">این نسخه دارای صفحه نمونه پنل مدیریت است. در مرحله بعد می‌توانیم ورود ادمین، دیتابیس PostgreSQL، آپلود عکس محصول، کد تخفیف، پیامک و درگاه زرین‌پال واقعی را اضافه کنیم.</p>
          <a href="/admin" className="mt-6 inline-block rounded-2xl bg-rice-green px-7 py-4 font-black text-white">مشاهده پنل مدیریت</a>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5"><BarChart3 className="text-rice-green"/><p className="mt-4 font-black">گزارش فروش</p></div>
            <div className="rounded-3xl bg-slate-50 p-5"><Package className="text-rice-green"/><p className="mt-4 font-black">مدیریت انبار</p></div>
            <div className="rounded-3xl bg-slate-50 p-5"><Settings className="text-rice-green"/><p className="mt-4 font-black">تنظیمات سایت</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

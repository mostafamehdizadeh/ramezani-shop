import { Instagram, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="text-2xl font-black text-rice-gold">برنج رامضانی</div>
          <p className="mt-4 leading-8 text-white/70">فروش مستقیم برنج ایرانی ممتاز با ضمانت کیفیت و ارسال سریع به سراسر کشور.</p>
        </div>
        <div>
          <h3 className="font-black">دسترسی سریع</h3>
          <div className="mt-4 grid gap-3 text-white/70"><a href="#products">محصولات</a><a href="/admin">پنل مدیریت</a><a href="#features">مزایا</a></div>
        </div>
        <div>
          <h3 className="font-black">تماس با ما</h3>
          <div className="mt-4 grid gap-3 text-white/70">
            <div className="flex items-center gap-2"><Phone size={18}/> ۰۹۱۲۱۲۳۴۵۶۷</div>
            <div className="flex items-center gap-2"><MapPin size={18}/> مازندران، شالیزارهای رامضانی</div>
            <div className="flex items-center gap-2"><Instagram size={18}/> ramezani.rice</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">© فروشگاه برنج رامضانی</div>
    </footer>
  )
}

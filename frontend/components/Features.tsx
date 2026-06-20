import { BadgeCheck, Leaf, PackageCheck, Headphones } from 'lucide-react'

export default function Features() {
  const items = [
    { title: 'کیفیت تضمینی', desc: 'کنترل کیفیت قبل از ارسال', icon: BadgeCheck },
    { title: 'کشت ایرانی', desc: 'تأمین مستقیم از کشاورز', icon: Leaf },
    { title: 'بسته‌بندی مطمئن', desc: 'کیسه‌های استاندارد و بهداشتی', icon: PackageCheck },
    { title: 'پشتیبانی خرید', desc: 'مشاوره انتخاب نوع برنج', icon: Headphones }
  ]
  return (
    <section id="features" className="mx-auto -mt-8 max-w-7xl px-4 relative z-20">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((it) => <div key={it.title} className="rounded-3xl bg-white p-6 shadow-soft">
          <it.icon className="mb-4 h-9 w-9 text-rice-green" />
          <h3 className="font-black">{it.title}</h3>
          <p className="mt-2 text-sm text-slate-500">{it.desc}</p>
        </div>)}
      </div>
    </section>
  )
}

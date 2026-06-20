import { Package, ShoppingBag, Users, Wallet } from 'lucide-react'

export default function AdminPage() {
  const cards = [
    { title: 'فروش امروز', value: '۲۴,۵۰۰,۰۰۰ تومان', icon: Wallet },
    { title: 'سفارش‌های امروز', value: '۱۸ سفارش', icon: ShoppingBag },
    { title: 'مشتریان', value: '۱۲۶ نفر', icon: Users },
    { title: 'موجودی کیسه', value: '۸۴۲ کیسه', icon: Package }
  ]
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-black text-rice-green">داشبورد مدیریت رامضانی</h1>
        <div className="grid gap-5 md:grid-cols-4">
          {cards.map((c) => <div key={c.title} className="rounded-3xl bg-white p-6 shadow-soft">
            <c.icon className="mb-4 h-8 w-8 text-rice-gold" />
            <p className="text-sm text-slate-500">{c.title}</p>
            <p className="mt-2 text-xl font-bold">{c.value}</p>
          </div>)}
        </div>
        <div className="mt-8 rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="mb-4 text-xl font-bold">مدیریت محصولات</h2>
          <div className="overflow-hidden rounded-2xl border">
            <table className="w-full text-right">
              <thead className="bg-slate-50"><tr><th className="p-4">محصول</th><th className="p-4">قیمت</th><th className="p-4">موجودی</th><th className="p-4">وضعیت</th></tr></thead>
              <tbody>
                {['طارم هاشمی ممتاز','دودی رامضانی','سرلاشه معطر'].map((name, i) => <tr key={name} className="border-t"><td className="p-4 font-bold">{name}</td><td className="p-4">{[1680000,1840000,980000][i].toLocaleString('fa-IR')} تومان</td><td className="p-4">{[250,120,472][i]} کیسه</td><td className="p-4"><span className="rounded-full bg-green-100 px-3 py-1 text-green-700">فعال</span></td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

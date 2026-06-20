import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import Features from '@/components/Features'
import AdminPreview from '@/components/AdminPreview'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ProductGrid />
      <AdminPreview />
    </main>
  )
}

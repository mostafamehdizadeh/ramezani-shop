async function getProducts(){
 const res=await fetch(process.env.NEXT_PUBLIC_API_URL+'/products',{cache:'no-store'})
 return res.json()
}

export default async function Home(){
 const products=await getProducts()
 return (
  <main style={{padding:40}}>
   <h1>فروشگاه برنج رمضانی</h1>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
   {products.map((p:any)=>(
    <div key={p.id} style={{border:'1px solid #ddd',padding:20}}>
      <h3>{p.name}</h3>
      <p>{p.price} تومان</p>
    </div>
   ))}
   </div>
  </main>
 )
}

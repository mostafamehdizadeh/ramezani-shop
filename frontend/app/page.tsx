
'use client'
import {useEffect,useState} from 'react'

export default function Page(){
 const [products,setProducts]=useState<any[]>([])

 useEffect(()=>{
  fetch('http://localhost:8000/products/')
   .then(r=>r.json())
   .then(setProducts)
 },[])

 return (
  <main style={{fontFamily:'sans-serif',padding:40}}>
   <h1>فروشگاه برنج رمضانی</h1>
   {products.map(p=>(
    <div key={p.id} style={{border:'1px solid #ddd',padding:20,marginTop:20}}>
     <h2>{p.name}</h2>
     <p>قیمت هر کیلو: {p.price_per_kg}</p>
     <p>وزن ها: {p.weights.join('kg , ')}kg</p>
     <button>افزودن به سبد خرید</button>
    </div>
   ))}
  </main>
 )
}

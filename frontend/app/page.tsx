
async function getProducts(){
 const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/products");
 return res.json();
}

export default async function Home(){
 const products = await getProducts();
 return (
  <main style={{padding:40,fontFamily:'sans-serif'}}>
   <h1>فروشگاه برنج رمضانی</h1>
   <div>
    {products.map((p:any)=>(
      <div key={p.id} style={{border:'1px solid #ddd',padding:20,margin:10}}>
        <h3>{p.name}</h3>
        <p>قیمت: {p.price}</p>
      </div>
    ))}
   </div>
  </main>
 )
}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Ramezani Rice API",
    description="API فروشگاه برنج رامضانی",
    version="2.2.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PRODUCTS = [
    {
        "id": 1,
        "name": "برنج طارم هاشمی ممتاز",
        "slug": "tarem-hashemi",
        "price": 1680000,
        "oldPrice": 1890000,
        "weight": "۱۰ کیلوگرم",
        "rating": 4.9,
        "badge": "پرفروش",
        "description": "برنج طارم هاشمی خوش‌عطر، سورت‌شده و مناسب مصرف خانوادگی.",
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 2,
        "name": "برنج دودی رامضانی",
        "slug": "smoked-rice",
        "price": 1840000,
        "oldPrice": 2050000,
        "weight": "۱۰ کیلوگرم",
        "rating": 4.8,
        "badge": "ویژه",
        "description": "برنج دودی خوش‌پخت با عطر اصیل دودی، مناسب مهمانی و مصرف خاص.",
        "image": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 3,
        "name": "برنج سرلاشه معطر",
        "slug": "broken-aromatic",
        "price": 980000,
        "oldPrice": 1150000,
        "weight": "۱۰ کیلوگرم",
        "rating": 4.6,
        "badge": "اقتصادی",
        "description": "گزینه اقتصادی، خوش‌عطر و مناسب مصرف روزانه خانواده‌ها.",
        "image": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 4,
        "name": "برنج عنبربو جنوب",
        "slug": "anbarboo",
        "price": 1320000,
        "oldPrice": 1490000,
        "weight": "۱۰ کیلوگرم",
        "rating": 4.7,
        "badge": "خوش‌عطر",
        "description": "عنبربو خوش‌عطر و سبک، مناسب دوست‌داران طعم اصیل ایرانی.",
        "image": "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=900&q=80"
    }
]

@app.get("/")
def root():
    return {"status": "online", "brand": "Ramezani Rice", "version": "2.2.0"}

@app.get("/products")
def products():
    return PRODUCTS

@app.get("/products/{product_id}")
def product_detail(product_id: int):
    for p in PRODUCTS:
        if p["id"] == product_id:
            return p
    return {"error": "product not found"}

@app.get("/admin/stats")
def admin_stats():
    return {
        "todaySales": 24500000,
        "orders": 18,
        "customers": 126,
        "stockBags": 842
    }

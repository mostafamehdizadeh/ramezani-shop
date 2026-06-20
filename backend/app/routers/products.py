
from fastapi import APIRouter

router = APIRouter()

products = [
 {"id":1,"name":"برنج هاشمی رمضانی","price":1200000,"stock":50},
 {"id":2,"name":"برنج فجر رمضانی","price":900000,"stock":40},
 {"id":3,"name":"برنج لاشه رمضانی","price":650000,"stock":30},
]

@router.get("/")
def list_products():
    return products

@router.get("/{product_id}")
def get_product(product_id:int):
    for p in products:
        if p["id"]==product_id:
            return p
    return {"error":"not found"}

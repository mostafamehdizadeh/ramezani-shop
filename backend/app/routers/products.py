
from fastapi import APIRouter

router=APIRouter()

products=[
 {"id":1,"name":"برنج هاشمی","weights":[5,10,20],"price_per_kg":180000},
 {"id":2,"name":"برنج فجر","weights":[5,10,20],"price_per_kg":150000},
 {"id":3,"name":"برنج طارم","weights":[5,10,20],"price_per_kg":200000}
]

@router.get('/')
def list_products():
    return products

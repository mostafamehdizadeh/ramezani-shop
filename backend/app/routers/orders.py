
from fastapi import APIRouter

router = APIRouter()
orders=[]

@router.post("/")
def create_order(order:dict):
    orders.append(order)
    return {"status":"created","order":order}

@router.get("/")
def list_orders():
    return orders


from fastapi import FastAPI
from .routers import products, orders

app = FastAPI(title="Ramezani Rice Shop API")

app.include_router(products.router, prefix="/products", tags=["products"])
app.include_router(orders.router, prefix="/orders", tags=["orders"])

@app.get("/")
def root():
    return {"message": "Ramezani Rice Shop API running"}

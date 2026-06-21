from fastapi import FastAPI
from .core.database import Base,engine
from .routers import products,orders

Base.metadata.create_all(bind=engine)

app=FastAPI(title='Ramezani Store API')

app.include_router(products.router)
app.include_router(orders.router)

@app.get('/')
def root():
    return {'status':'ok'}

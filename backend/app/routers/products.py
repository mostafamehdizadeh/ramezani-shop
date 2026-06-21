from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from ..core.database import SessionLocal
from ..models.product import Product
from ..schemas.product import ProductCreate,ProductOut

router=APIRouter(prefix='/products',tags=['products'])

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get('/',response_model=list[ProductOut])
def list_products(db:Session=Depends(get_db)):
    return db.query(Product).all()

@router.post('/',response_model=ProductOut)
def create_product(data:ProductCreate,db:Session=Depends(get_db)):
    p=Product(**data.dict())
    db.add(p)
    db.commit()
    db.refresh(p)
    return p

from pydantic import BaseModel

class ProductCreate(BaseModel):
    name:str
    description:str
    price:float
    stock:int
    image_url:str|None=None

class ProductOut(ProductCreate):
    id:int
    class Config:
        from_attributes=True

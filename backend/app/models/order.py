from sqlalchemy import Column,Integer,String,Float,ForeignKey
from ..core.database import Base

class Order(Base):
    __tablename__='orders'
    id=Column(Integer,primary_key=True,index=True)
    customer_name=Column(String)
    customer_phone=Column(String)
    customer_address=Column(String)
    total_price=Column(Float)
    status=Column(String,default='new')

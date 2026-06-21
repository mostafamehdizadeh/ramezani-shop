from fastapi import APIRouter

router=APIRouter(prefix='/orders',tags=['orders'])

@router.post('/')
def create_order(data:dict):
    return {"message":"order received","data":data}

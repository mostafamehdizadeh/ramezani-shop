# فروشگاه برنج رامضانی - نسخه V2.2 Fixed

## اجرا

روی سیستم شما Docker Compose نسخه قدیمی فعال است، پس از دستور زیر استفاده کنید:

```bash
docker-compose up --build
```

سپس:

- Frontend: http://localhost:3000
- Backend Docs: http://localhost:8000/docs
- Admin Panel: http://localhost:3000/admin

## اگر قبلاً کانتینر قدیمی دارید

```bash
docker-compose down --remove-orphans
docker-compose up --build
```

# Проект з використанням PostgreSQL, Prisma та JWT

## Початок роботи

1. Створіть базу даних PostgreSQL за допомогою вашого інтерфейсу або командного рядка.

2. Створіть `.env` файл у кореневій директорії проекту та додайте наступне:

DATABASE_URL="postgresql://{user}:{password}@localhost:5432/{dbName}?schema=public" 

JWT_SECRET_KEY={your-secret-key} 

JWT_EXPIRES_IN="4h"


Замість `{user}`, `{password}` та `{dbName}` вкажіть відповідні значення для вашої бази даних. Замість `{your-secret-key}` вкажіть ваш секретний ключ для JWT.

3. Виконайте команду для встановлення необхідних залежностей:

```bash
npm install

```


4. Виконайте міграції для вашої бази даних:

```bash
npx prisma migrate dev
```


5. Запуск серверу
```bash
npm run start:dev
```

6. Тепер ви можете зайти на http://localhost:8000, щоб перевірити роботу бекенду.



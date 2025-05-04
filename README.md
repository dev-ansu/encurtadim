# Encurtadim 🔗

Um encurtador de URLs simples e direto ao ponto, feito com Next.js, Prisma e PostgreSQL. Com o **encurtadim**, você pode gerar URLs curtas personalizadas e também resolver URLs curtas para os links originais com facilidade.

## ✨ Tecnologias utilizadas

- [Next.js (App Router)](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Funcionalidades

- ✅ Encurtar URLs longas
- ✅ Redirecionamento automático ao acessar a URL curta
- ✅ Interface minimalista com Tailwind CSS
- ✅ Validação de URLs
- ✅ Registro das URLs no banco de dados

## 📦 Instalação e uso

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/encurtadim.git
cd encurtadim
```
```
npm install
```
```
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

```
npx prisma migrate dev
```

```
npm run dev
```

Feito com 💜 por Anderson Souza
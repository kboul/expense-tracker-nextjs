This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Create a .env and include your **DATABASE_URL** from **neon**

```
DATABASE_URL=...
```

2. Install, init, generate & migrate **prisma**

a. Install

```
npm i -D prisma
```

b. Init

```
npx prisma init
```

c. Once prisma schema is modified run

```
npx prisma generate
```

d. Create prisma migrations

```
npx prisma migrate dev
```

3. Inluce in .env your **clerk** credentials

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

4.  Run the development server using only **pnpm**:

```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

import { PrismaClient } from "@prisma/client";

// hack to prevent hot reload from creating new connections
// and initialize prisma over and over again

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

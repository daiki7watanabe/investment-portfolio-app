import type { PrismaClient } from './generated/prisma/client'

export async function selectHelloWorld(prisma: PrismaClient) {
  const rows = await prisma.$queryRaw<{ value: string }[]>`SELECT 'HelloWorld' AS value`
  return rows
}

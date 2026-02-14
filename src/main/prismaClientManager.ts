import 'dotenv/config'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from './generated/prisma/client'

type PrismaState = {
  client: PrismaClient | null
}

const prismaState: PrismaState = {
  client: null,
}

export const prismaClientManager = {
  create() {
    if (!prismaState.client) {
      const databaseUrl = process.env.DATABASE_URL

      if (!databaseUrl) {
        throw new Error('DATABASE_URL is not set.')
      }

      const adapter = new PrismaBetterSqlite3({ url: databaseUrl })
      prismaState.client = new PrismaClient({ adapter })
    }

    return prismaState.client
  },

  getClient() {
    return prismaClientManager.create()
  },

  async disconnect() {
    if (!prismaState.client) {
      return
    }

    await prismaState.client.$disconnect()
    prismaState.client = null
  },
}

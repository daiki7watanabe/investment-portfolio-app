import { prismaClientManager } from './prismaClientManager'

export abstract class BaseQuery {
    protected client = prismaClientManager.getClient()
    async [Symbol.asyncDispose]() {
        await prismaClientManager.disconnect()
    }
}
import { BaseQuery } from './baseQuery'
import { selectHelloWorld } from './helloWorldSql'

export class HelloWorldQueryExecutor extends BaseQuery {
    async fetchHelloWorldValue() {
        const rows = await selectHelloWorld(this.client)
        return rows[0]?.value ?? null
    }
}

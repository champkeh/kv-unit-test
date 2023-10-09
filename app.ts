import * as getOps from "./ops/get.ts"
import * as getManyOps from "./ops/getMany.ts"
import * as listOps from "./ops/list.ts"
import * as setOps from "./ops/set.ts"
import * as deleteOps from "./ops/delete.ts"
import * as sumOps from "./ops/sum.ts"
import * as minOps from "./ops/min.ts"
import * as maxOps from "./ops/max.ts"
import * as enqueueOps from "./ops/enqueue.ts"
import {insertLarge} from "./ops/atomic.ts";


Deno.serve(async (req: Request) => {
    const url = new URL(req.url)
    const op = url.searchParams.get('op')!
    console.log(`execute operation: ${op}`)

    if (op.startsWith('get')) {
        await getOps[op as keyof typeof getOps]()
    } else if (op.startsWith('getMany')) {
        await getManyOps[op as keyof typeof getManyOps]()
    } else if (op.startsWith('list')) {
        await listOps[op as keyof typeof listOps]()
    } else if (op.startsWith('set')) {
        await setOps[op as keyof typeof setOps]()
    } else if (op.startsWith('delete')) {
        await deleteOps[op as keyof typeof deleteOps]()
    } else if (op.startsWith('sum')) {
        await sumOps[op as keyof typeof sumOps]()
    } else if (op.startsWith('min')) {
        await minOps[op as keyof typeof minOps]()
    } else if (op.startsWith('max')) {
        await maxOps[op as keyof typeof maxOps]()
    } else if (op === 'insertLarge') {
        await insertLarge()
    } else if (op.startsWith('enqueue')) {
        await enqueueOps[op as keyof typeof enqueueOps]()
    }

    return new Response(`response to ${req.url}`)
})

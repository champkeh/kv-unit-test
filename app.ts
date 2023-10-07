import * as setOps from "./ops/set.ts"
import * as getOps from "./ops/get.ts"
import * as deleteOps from "./ops/delete.ts"


Deno.serve(async (req: Request) => {
    const url = new URL(req.url)
    const op = url.searchParams.get('op')!
    console.log(`execute operation: ${op}`)

    if (op.startsWith('get')) {
        await getOps[op as keyof typeof getOps]()
    } else if (op.startsWith('set')) {
        await setOps[op as keyof typeof setOps]()
    } else if (op.startsWith('delete')) {
        await deleteOps[op as keyof typeof deleteOps]()
    }

    return new Response(`response to ${req.url}`)
})

import * as kv from "./kv.ts"

type WriteOp = 'write1' | 'write2' | 'write3' | 'write4' | 'write5' | 'write6' | 'write7'
const writeOps = ['write1', 'write2', 'write3', 'write4', 'write5', 'write6', 'write7']

Deno.serve(async (req: Request) => {
    const url = new URL(req.url)
    const token = req.headers.get('token')
    console.log(url)

    if (token === '666') {
        if (url.pathname === '/read') {
            console.log('read')
            await kv.read()
        } else if (url.pathname === '/write') {
            const data = url.searchParams.get('data')!
            const op = url.searchParams.get('op')! as WriteOp

            if (writeOps.includes(op)) {
                console.log('write', op, data)
                await kv[op](data)
            }
        } else if (url.pathname === '/clear') {
            console.log('clear')
            await kv.clear()
        }
    }

    return new Response(`response to ${req.url}`)
})

import {read, write, clear} from "./kv.ts"


Deno.serve(async (req: Request) => {
    const url = new URL(req.url)
    const token = url.searchParams.get('token')

    if (token === '666') {
        if (url.pathname === '/read') {
            console.log('read')
            await read()
        } else if (url.pathname === '/write' && url.searchParams.has('data')) {
            console.log('write')
            await write(url.searchParams.get('data')!)
        } else if (url.pathname === '/clear') {
            console.log('clear')
            await clear()
        }
    }

    return new Response(`response to ${req.url}`)
})

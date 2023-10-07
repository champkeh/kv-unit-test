import {read, write, clear} from "./kv.ts"


Deno.serve(async (req: Request) => {
    const url = new URL(req.url)
    const token = url.searchParams.get('token')
    console.log('url: ', req.url)
    console.log('token: ', token)

    if (url.pathname === '/read') {
        console.log('read')
        // await read()
    } else if (url.pathname === '/write') {
        console.log('write')
        // await write()
    } else if (url.pathname === '/clear') {
        console.log('clear')
        // await clear()
    }

    return new Response(`response to ${req.url}`)
})

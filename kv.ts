const kv = await Deno.openKv();

// units/day (4kb)
export async function read() {
    const iter = kv.list({prefix: []})
    for await (const res of iter) {
        console.log(res)
    }
}

export async function get() {
    await kv.get([""])
}



function makeData(len = 10) {
    return Array.from({length: len}).fill('i').join('')
}

// units/day (1kb)
export async function write() {
    const value = makeData(1024 * 64 - 6)
    const key = makeData(1024 * 2 - 2)
    // console.log(value.length)
    // console.log(JSON.stringify(value).length)
    await kv.set([key], value)
}

export async function clear() {
    for await (const entry of kv.list({prefix: []})) {
        await kv.delete(entry.key)
    }
}

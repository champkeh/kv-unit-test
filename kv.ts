import * as dotenv from "https://deno.land/std@0.202.0/dotenv/mod.ts";


/**
 * 是否在deploy中运行代码
 */
export function runInDenoDeploy() {
    const deploymentId = Deno.env.get("DENO_DEPLOYMENT_ID")
    return !!deploymentId
}

let kv: Deno.Kv
if (runInDenoDeploy()) {
    kv = await Deno.openKv();
} else {
    const env = await dotenv.load()
    Deno.env.set('DENO_KV_ACCESS_TOKEN', env["DENO_KV_ACCESS_TOKEN"])
    kv = await Deno.openKv("https://api.deno.com/databases/d64e0c74-717b-49b3-a4ca-d3212045cb8a/connect");
}

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


function makeData(data = '0', len = 10) {
    return Array.from({length: len}).fill(data).join('')
}

// units/day (1kb)
export async function write(char: string) {
    const value = makeData(char, 1024 * 64 - 6)
    const key = makeData(char, 1024 * 2 - 2)
    await kv.set([key], value)
}

export async function clear() {
    for await (const entry of kv.list({prefix: []})) {
        await kv.delete(entry.key)
    }
}

// key: 1k  value: 1k  => 2 unit
export async function write1(char: string) {
    console.log('write 1:')
    const key = makeData(char, 1000)
    const value = makeData(char, 1000)
    await kv.set([key], value)
}

// key: 10  value: 2k  => 2 unit
export async function write2(char: string) {
    console.log('write 2:')
    const key = makeData(char, 10)
    const value = makeData(char, 1000 * 2)
    await kv.set([key], value)
}

// key: 10  value: 1k  => 1 unit
export async function write3(char: string) {
    console.log('write 3:')
    const key = makeData(char, 10)
    const value = makeData(char, 1000)
    await kv.set([key], value)
}

// key: 10, value: 10  => 1 unit
export async function write4(char: string) {
    console.log('write 4:')
    const key = makeData(char, 500)
    const value = makeData(char, 500)
    await kv.set([key], value)
}

// key: 2k, value: 1k  => 3 unit
export async function write5(char: string) {
    console.log('write 5:')
    const key = makeData(char, 2000)
    const value = makeData(char, 1000)
    await kv.set([key], value)
}

export async function write6(char: string) {
    console.log('write 6:')
    const key = makeData(char, 10)
    const value = makeData(char, 10)
    await kv.set([key + '1'], value + '1')
    await kv.set([key + '2'], value + '2')
    await kv.set([key + '3'], value + '3')
}

export async function write7(char: string) {
    console.log('write 7:')
    const key = makeData(char, 10)
    const value = makeData(char, 10)
    await kv.atomic()
        .set([key + '1'], value + '1')
        .set([key + '2'], value + '2')
        .set([key + '3'], value + '3')
        .commit()
}

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

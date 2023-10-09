import kv from "../kv.ts"
import {_10B, _1K, _2K, _64K} from "./const.ts";


export async function enqueue1() {
    await kv.enqueue(_10B, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered"]]
    })
}

export async function enqueue2() {
    await kv.enqueue(_1K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered"]]
    })
}

export async function enqueue3() {
    await kv.enqueue(_2K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered"]]
    })
}

export async function enqueue4() {
    await kv.enqueue(_64K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered"]]
    })
}

export async function enqueue5() {
    await kv.enqueue(_64K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered"]]
    })
}

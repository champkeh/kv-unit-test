import kv from "../kv.ts"
import {_100K, _10B, _1K, _1M, _2K, _64K} from "./const.ts";


// 18 write units
export async function enqueue1() {
    await kv.enqueue(_10B, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered for enqueue1"]]
    })
}

// 22
export async function enqueue2() {
    await kv.enqueue(_1K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered for enqueue2"]]
    })
}

export async function enqueue3() {
    await kv.enqueue(_2K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered for enqueue3"]]
    })
}

export async function enqueue4() {
    await kv.enqueue(_64K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered for enqueue4"]]
    })
}

export async function enqueue5() {
    await kv.enqueue(_64K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered for enqueue5"]]
    })
}

export async function enqueue6() {
    await kv.enqueue(_100K, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered for enqueue6"]]
    })
}

export async function enqueue7() {
    await kv.enqueue(_1M, {
        delay: 10 * 1000,
        keysIfUndelivered: [["delivered for enqueue7"]]
    })
}

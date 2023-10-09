import kv from "../kv.ts";
import {_10B, _2K} from "./const.ts";

// 1 unit
export async function sum1() {
    const atomic = kv.atomic()

    atomic.sum([_10B], 2n)
    atomic.sum([_10B], 2n)

    await atomic.commit()
}

// 2 unit
export async function sum2() {
    const atomic = kv.atomic()

    atomic.sum([_10B], 2n)
    await atomic.commit()

    atomic.sum([_10B], 2n)
    await atomic.commit()
}

// 4Kib => 4 unit
export async function sum3() {
    const atomic = kv.atomic()

    atomic.sum([_2K], 1n)
    atomic.sum([_2K], 1n)

    await atomic.commit()
}

// 4Kib => 4 unit
export async function sum4() {
    const atomic = kv.atomic()

    atomic.sum([_2K], 1n)
    await atomic.commit()

    atomic.sum([_2K], 1n)
    await atomic.commit()
}

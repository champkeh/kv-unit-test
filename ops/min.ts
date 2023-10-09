import kv from "../kv.ts";
import {_10B, _2K} from "./const.ts";

// 1 unit
export async function min1() {
    const atomic = kv.atomic()

    atomic.min([_10B], 2n)
    atomic.min([_10B], 2n)

    await atomic.commit()
}

// 2 unit
export async function min2() {
    const atomic = kv.atomic()

    atomic.min([_10B], 2n)
    await atomic.commit()

    atomic.min([_10B], 2n)
    await atomic.commit()
}

// 4Kib => 4 unit
export async function min3() {
    const atomic = kv.atomic()

    atomic.min([_2K], 1n)
    atomic.min([_2K], 1n)

    await atomic.commit()
}

// 4Kib => 4 unit
export async function min4() {
    const atomic = kv.atomic()

    atomic.min([_2K], 1n)
    await atomic.commit()

    atomic.min([_2K], 1n)
    await atomic.commit()
}

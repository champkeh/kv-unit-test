import kv from "../kv.ts";
import {_10B, _2K} from "./const.ts";

// 1 unit
export async function max1() {
    const atomic = kv.atomic()

    atomic.max([_10B], 2n)
    atomic.max([_10B], 2n)

    await atomic.commit()
}

// 2 unit
export async function max2() {
    const atomic = kv.atomic()

    atomic.max([_10B], 2n)
    await atomic.commit()

    atomic.max([_10B], 2n)
    await atomic.commit()
}

// 4Kib => 4 unit
export async function max3() {
    const atomic = kv.atomic()

    atomic.max([_2K], 1n)
    atomic.max([_2K], 1n)

    await atomic.commit()
}

// 4Kib => 4 unit
export async function max4() {
    const atomic = kv.atomic()

    atomic.max([_2K], 1n)
    await atomic.commit()

    atomic.max([_2K], 1n)
    await atomic.commit()
}

import kv from "../kv.ts"
import {_10B, _1K, _2K, _64K} from "./const.ts";


// key: 10B, value: 10B, total: 20B => 1 (unit)
export async function set1() {
    await kv.set([_10B], _10B)
}

// 3 * 1 = 3 (unit)
export async function set2() {
    await kv.set([_10B], _10B)
    await kv.set([_10B], _10B)
    await kv.set([_10B], _10B)
}

// (10 + 10) * 3 = 60B  => 1 (unit)
export async function set3() {
    await kv.atomic()
        .set([_10B], _10B)
        .set([_10B], _10B)
        .set([_10B], _10B)
        .commit()
}

// key: 1KiB  value: 1KiB  => 2 (unit)
export async function set4() {
    await kv.set([_1K], _1K)
}

// key: 1KiB  value: 2KiB  => 3 (unit)
export async function set5() {
    await kv.set([_1K], _2K)
}

// key: 2KiB, value: 1KiB  => 3 (unit)
export async function set6() {
    await kv.set([_2K], _1K)
}

// key: 2KiB, value: 64KiB  => 65 (unit)
export async function set7() {
    await kv.set([_2K], _64K)
}

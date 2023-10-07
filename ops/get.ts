import kv from "../kv.ts"
import {_10B, _1K, _2K, _64K} from "./const.ts";

// units/day (4kb)

export async function get1() {
    await kv.get([_10B])
}

export async function get2() {
    await kv.get([_1K])
}

export async function get3() {
    await kv.get([_2K])
}

export async function get4() {
    await kv.get([_64K])
}

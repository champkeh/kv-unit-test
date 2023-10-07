import kv from "../kv.ts"
import {_10B, _1K, _2K, _64K} from "./const.ts";

// units/day (4kb)

export async function getMany1() {
    await kv.getMany([
        [_10B],
    ])
}

export async function getMany2() {
    await kv.getMany([
        [_10B],
        [_10B],
        [_10B],
    ])
}


export async function getMany3() {
    await kv.getMany([
        [_1K],
    ])
}

export async function getMany4() {
    await kv.getMany([
        [_1K],
        [_1K],
        [_1K],
    ])
}

export async function getMany5() {
    await kv.getMany([
        [_64K],
    ])
}

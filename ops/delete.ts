import kv from "../kv.ts"
import {_10B, _1K, _2K, _64K} from "./const.ts";

export async function delete1() {
    await kv.delete([_10B])
}

export async function delete2() {
    await kv.delete([_1K])
}

export async function delete3() {
    await kv.delete([_2K])
}

export async function delete4() {
    await kv.delete([_64K])
}

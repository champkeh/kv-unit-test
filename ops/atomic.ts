import kv from "../kv.ts";
import {_25K, _2K, _64K} from "./const.ts";

// 73/160
// 873/960
// 800KiB

export async function insertLarge() {
    await kv.atomic()
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _64K)
        .set([_2K], _25K)
        .commit()
}

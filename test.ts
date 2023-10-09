import {clear} from "./utils.ts"
import kv from "./kv.ts";
import {_10B, _1K, _2K} from "./ops/const.ts";
import {max1} from "./ops/max.ts";

// await clear()

// await kv.set([_10B], new Deno.KvU64(0n))

await max1()

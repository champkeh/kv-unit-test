import * as dotenv from "https://deno.land/std@0.202.0/dotenv/mod.ts";
import {runInDenoDeploy} from "./utils.ts";


let kv: Deno.Kv
if (runInDenoDeploy()) {
    kv = await Deno.openKv();
} else {
    const env = await dotenv.load()
    Deno.env.set('DENO_KV_ACCESS_TOKEN', env["DENO_KV_ACCESS_TOKEN"])
    kv = await Deno.openKv("https://api.deno.com/databases/11a27e67-7cc4-4806-a17b-6b2c54c3d389/connect");
}

export default kv

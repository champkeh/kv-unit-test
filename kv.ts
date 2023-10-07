import * as dotenv from "https://deno.land/std@0.202.0/dotenv/mod.ts";
import {runInDenoDeploy} from "./utils.ts";


let kv: Deno.Kv
if (runInDenoDeploy()) {
    kv = await Deno.openKv();
} else {
    const env = await dotenv.load()
    Deno.env.set('DENO_KV_ACCESS_TOKEN', env["DENO_KV_ACCESS_TOKEN"])
    kv = await Deno.openKv("https://api.deno.com/databases/d64e0c74-717b-49b3-a4ca-d3212045cb8a/connect");
}

export default kv

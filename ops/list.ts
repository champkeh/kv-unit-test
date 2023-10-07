import kv from "../kv.ts";

export async function list1() {
    for await (const entry of kv.list({prefix: []})) {
        console.log(entry)
    }
}

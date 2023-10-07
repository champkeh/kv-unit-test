import kv from "./kv.ts";

/**
 * 构造数据
 * @param data
 * @param len
 */
export function makeData(data = '0', len = 10) {
    return Array.from({length: len}).fill(data).join('')
}

/**
 * 是否在deploy中运行代码
 */
export function runInDenoDeploy() {
    const deploymentId = Deno.env.get("DENO_DEPLOYMENT_ID")
    return !!deploymentId
}

export async function clear() {
    for await (const entry of kv.list({prefix: []})) {
        await kv.delete(entry.key)
    }
}

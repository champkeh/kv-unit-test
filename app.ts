Deno.serve((req: Request) => {
    return new Response(`response from ${req.url}`)
});

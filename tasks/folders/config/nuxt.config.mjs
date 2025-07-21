// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', '@vueuse/nuxt'],
    srcDir: 'app/',
    watch: ['./app/**/*.mjs'],

    pinia: {
        storesDirs: ['stores/**']
    },
    nitro: {
        preset: "bun",
        node: true,
        inlineDynamicImports: true,
        serveStatic: "inline",
        experimental: {
            websocket: true
        },
        esbuild: {
            options: {
                target: "esnext",
            },
        },
    }
})
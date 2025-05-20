export default defineAppConfig({
  layer: {
    name: "Hello from Nuxt layer '{{.NAME}}'"
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    layer?: {
      /** Project name */
      name?: string
    }
  }
}

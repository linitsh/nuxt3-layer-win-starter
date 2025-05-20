// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2025-05-20',
  devtools  : { enabled: true },
  srcDir    : 'app/',
  components: [
    { path: 'components', prefix: `{{.NAME}}:` },
  ],
  alias: {
    '#main': '../../../../'
  },

})


// use this function to run server from anywhere else
export const app = async function main() {
      //@ts-ignore
      const module = await import('./src/.output/server/nuxt.mjs');
}

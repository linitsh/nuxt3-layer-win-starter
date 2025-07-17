
 async function main() {
      //@ts-ignore
      const module = await import('./src/.output/server/nuxt.mjs');
}

export const app = main
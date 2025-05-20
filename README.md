---
title     : Nuxt 3 Starter
tags      : [nuxt, layers, starter]
categories: [nuxt, vuejs, bun, nodejs, js, ts, template]
---
---
### README

> [!WARNING]
> under construction  
> not ready for use yet  
> ready on 86%  
> its for win

---
### install

1.  install `scoop`.

2.  `scoop install`:
    - `nvm`  (need reload vscode)
    - `task` (aka taskfile - lern if you dont know for understand this project)
    - `bun`

3. change `dot.env` variables (defaults is ok)

4. change `packages.txt` (commentted will be ignored)

5. change the `taskfile.yaml` `x` task
```yaml
  x:
    desc: ''
    cmds:
    # - task: soft:x  # <-- comment if you no need instal nodejs and bun by scoop
    - task: nuxt:x
    - task: layer:create-test
```

6. run:
```shell
# install like standart nuxt project
task x
# then vill be installed test layer (say yes) and then builded
Ctrl + C
cd <PROJECT_NAME>
```

7. change `nuxt.config.ts`
```ts
import config from "./config/extend.nuxt.config" // auto added from install
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ...config,          // <- here
  modules: [
    ...config.modules // <- here
  ]
})
```

8. run:
```shell
bun run dev
```
---
### refs

- [docs](docs/README.md)

---

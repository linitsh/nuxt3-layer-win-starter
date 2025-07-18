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
> ready on 89%  
> its for win (scoop / bun compiled build)
___
### Description

- this is template for create nuxt 3 app with nuxt layers pattern  
- can be bundled with bun to standalone bin.exe file (see `tasks/build.yaml`)

---
### install

1.  install `scoop`.

2.  `scoop install`:
    - `nvm`  (need reload vscode)
    - `task` (aka taskfile - lern if you dont know for understand this project)
    - `bun`

3. change `packages.txt` (commentted will be ignored)

4. change the `taskfile.yaml` `x` task - and vars if need
```yaml
vars:
  PROJECT_NAME: src
  SRC_DIR     : app

tasks:
  x:
    desc: ''
    cmds:
    # - task: soft:x  # <-- comment if you no need instal nodejs and bun by scoop
    - task: nuxt:x
    - task: layer:create-test
```

5. run:
```shell
# install like standart nuxt project
task x
# then vill be installed test layer (say yes) and then builded
Ctrl + C
cd <PROJECT_NAME>
```

6. change `nuxt.config.ts`
```ts
import config from "./config/extend.nuxt.config" // auto added from install
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '20XX-XX-XX',
  devtools: { enabled: true },
  ...config,          // <- here
  modules: [
    ...config.modules // <- and here
  ]
})
```

7. run:
```shell
bun run dev
```
___
### TO-DO

- more simplify and testing...

---
### refs

- [docs](docs/README.md)

- [scoop](https://scoop.sh/)

- [taskfile](https://taskfile.dev)

- [nuxt](https://nuxt.com/)

---

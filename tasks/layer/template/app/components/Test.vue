<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ layer }}</pre>
  </div>
</template>


<script setup lang="ts">
import * as x from "#main/lib"

const { layer } = useAppConfig()

</script>


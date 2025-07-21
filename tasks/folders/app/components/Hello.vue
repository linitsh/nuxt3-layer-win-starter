<template>
    <div >
        <h1>Hello API</h1>
        <div>
            data: {{  data  }}
        </div>
   
    </div>
</template>

<script setup lang="ts">

const { data } = await useFetch('/api/hello')


</script>

<style scoped>

</style>

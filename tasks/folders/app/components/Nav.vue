<template>
    <div class="nav">
        <hr>
        <nav>
            <div class="gap"></div>
            <template v-for="page in getPages">
                <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
            </template>
            <NuxtLink to="/">Home</NuxtLink>
        </nav>
        <hr>
    </div>
</template>

<script setup lang="ts">

const router = useRouter()

const getPages = router.getRoutes().filter(route => route.name != 'index').map(route => {
    return {
        name: route.name,
        path: route.path
    }
})
</script>

<style scoped>
.nav{
    margin-bottom: 20px;
}
nav {
    display: flex;
    gap: 10px;
    color: limegreen;
    flex-direction: row-reverse;

}
hr {
    border: 1px solid gray;
}
a {
    text-decoration: none;
    color: inherit;
}

.gap {
    flex-grow: 1;
}
</style>

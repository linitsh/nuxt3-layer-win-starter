<template>
    <div class="ws">
        <h1>WebSocket</h1>
        <div class="status">
            status: {{status}}
            <a href="http://localhost:3000" target="_blank">Open other client</a>
        </div>
        <div class="form">
            <form @submit="sendData">
                <input type="text" v-model="message">
                <button type="submit">Send</button>
            </form>
        </div>
        <div class="history">
            <div class="item" v-for="item in history">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const url = `localhost:3000`

const {status, data, send, open, close} = useWebSocket(`ws://${url}/api/ws-chat`, {autoReconnect: false})


const history = ref<string[]>([])
const message = ref("")
const sendData = async (e: Event) => {
    e.preventDefault()
    history.value.push(`client: ${message.value}`)
    send(message.value)
}
watch(data, (data) => {
    history.value.push(`server: ${data}`)
})

</script>

<style scoped>
a{
    color: limegreen;
    text-decoration: none;
}
.status {
    margin-bottom: 10px;
}
.history{
    margin-top: 10px;
    max-height: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    max-width: 400px;
    overflow-y: auto;
    background: #000;
}
.item{
    margin-bottom: 5px;
}
</style>

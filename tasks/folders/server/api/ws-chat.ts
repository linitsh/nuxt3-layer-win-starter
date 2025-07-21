const room ='ROOM'

export default defineWebSocketHandler({
    open(peer) {
        console.log('open');
        peer.subscribe(room);
        peer.publish(room,"hello");
    },
    close(peer, event) {
        console.log('close');
    },
    async message(peer, message) {
        let msg = message.text()
        console.log('message', msg);
        peer.publish(room,msg);
    },
    error(peer, error) {
        console.error('error');
    },
    
});
import finToken from "./FinnhubKey"

const socket = new WebSocket(`wss://ws.finnhub.io?token=${finToken}`);

export default {

    socket,

    connection(symbol) {
        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}))
        });
        
    },
    listen() {
        socket.addEventListener('message', function (event) {
            return event.data
            // console.log('Message from server ', event.data);
        });
    },
    unsubscribe(symbol) {
        socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    },
    close() {
        socket.close()
    }

}
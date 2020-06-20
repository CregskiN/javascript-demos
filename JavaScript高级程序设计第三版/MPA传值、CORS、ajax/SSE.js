function SSE() {
    // 该对象传入的url必须同源
    var source = new EventSource('http://localhost:8001');

    source.onopen = (event) => {
        console.log('连接被建立了', event);
    }

    source.onmessage = (event) => {
        console.log('收到Server发送的消息', event.data)
    }

    source.onerror = (err) => {
        console.log('出错', err);
    }
}
window.onload = () => {
    const openElem = document.getElementById('open');
    openElem.addEventListener('click', function () {
        child = window.open('http://localhost:3001/child.html', 'title');
    })

    const postChildElem = document.getElementById('postChild');
    postChildElem.addEventListener('click', function () {
        child.postMessage('hello world!', 'http://localhost:3001/child.html');
    })

    /**
     * 绑定接收信息事件
     */
    window.addEventListener('message', function (msg) {
        if (msg.data.type === 'form') {
            var inputs = document.getElementsByTagName('input');
            inputs[0].value = msg.data.account;
            inputs[1].value = msg.data.password;
        }
    })

    const postJsonpElem = document.getElementById('postJsonp');
    postJsonpElem.addEventListener('click', function (event) {
        event.stopPropagation();
        addScriptTag('http://localhost:3001/test/jsonp?callback=foo');
    }, false);

    const xmrGETElem = document.getElementById('xmrGET');
    xmrGETElem.addEventListener('click', function (event) {
        ajax({
            method: 'get',
            url: 'http://localhost:3001/test/xmr',
            data: {
                msg: 'hello world'
            }
        })
    }, false);

    const xmrPOSTElem = document.getElementById('xmrPOST')
    xmrPOSTElem.addEventListener('click', function () {
        ajax({
            method: 'post',
            url: 'http://localhost:3001/test/xmr',
            data: {
                msg: 'POST: hello world!'
            }
        })
    }, false);


    const xmrPNGElem = document.getElementById('xmrPNG')
    xmrPNGElem.addEventListener('click', function () {
        ajax({
            method: 'get',
            url: 'http://localhost:3000/example.png'
        })
    }, false);

    const syncAjaxElem = document.getElementById('syncAjax');
    syncAjaxElem.addEventListener('click', () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/search/users?q=cregskin', false);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                console.log('同步ajax响应完成')
            }
        }
    })

    const alertElem = document.getElementById('alert');
    alertElem.addEventListener('click', () => {
        alert('点我干啥');
    })


}
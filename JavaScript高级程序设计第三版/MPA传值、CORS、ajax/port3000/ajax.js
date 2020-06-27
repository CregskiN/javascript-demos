function addScriptTag(src) {
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.src = src;
    document.body.appendChild(script);
}

function foo(data) {
    console.log('jsonp data is', data);
};

function consoleXHR(xhr) {
    // /**
    //  * responseText: 作为响应主体被返回的文本
    //  * responseType: 
    //  * responseXML: 如果res Content-Type为 text/xml 或 application/xml，这个属性将保存res data的XML DOM文档
    //  * responseURL: 
    //  * status: http响应码
    //  * statusText: http头部报文响应信息
    //  */
    const { responseText, responseType, responseXML, responseURL, status, statusText } = xhr;
    console.group();
    console.info('xhr');
    console.log('responseText', responseText);
    console.log('responseType', responseType);
    console.log('responseXML', responseXML);
    console.log('responseURL', responseURL);
    console.log('status', status);
    console.log('statusText', statusText);
    console.groupEnd()
}

/**
 * 将参数添加至url
 * @param {*} url 
 * @param {*} data 
 */
function generateParams(data) {
    if (Object.prototype.toString.call(data) === '[object Object]') {
        let queryStr = '';
        for (let key in data) {
            queryStr += (`${key}=${data[key]}&`);
        }
        queryStr = queryStr.substr(0, queryStr.length - 1);
        queryStr = window.encodeURI(queryStr);
        return queryStr;
    } else {
        console.error('只支持对象类型转query url传参');
    }
}

/**
 * 设置request header
 * @param {*} xmr 
 * @param {*} headers 
 */
function setHeaders(xhr, headers) {
    if (Object.prototype.toString.call(headers) === '[object Object]') {
        for (let key in headers) {
            xhr.setRequestHeader(key.toString(), headers[key].toString());
        }
    }
}

function ajax(options) {
    const {
        method,
        url,
        data,
        headers/*  = {
            'Content-Type': 'application/json'
        } */
    } = options;
    const xhr = new XMLHttpRequest();

    let finalURL = '';
    if (method === 'GET' || method === 'get') {
        if (data !== undefined && data !== {}) {
            finalURL = '?' + generateParams(data);
            // console.log(finalURL)
        }
    }

    // 进度事件
    /**
     * loadstart: 在接收到响应数据第一个字节时触发
     * progress: 在接收响应期间持续不断触发
     * error: 在请求发生错误时触发
     * abort: 在调用abort()导致终止后触发
     * load: 在接收到完整响应数据时触发
     * loadend: 在通信完成或触发error、abort、load事件后触发
     */

    xhr.onloadstart = (e) => {
        console.log('onloadstart', e)
    }
    xhr.onprogress = (e) => {
        console.log('progress', e)
    }
    xhr.onerror = (e) => {
        console.log('error', e)
    }
    xhr.onabort = (e) => {
        console.log('abort', e)
    }
    xhr.onload = (e) => {
        console.log('load', e)
    }
    xhr.onloadend = (e) => {
        console.log('loadend', e)
    }


    finalURL = url + finalURL;
    // console.log(finalURL)
    xhr.open(method, finalURL, true); // 是否异步

    // 异步模式下的响应
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 0) {
            // 0: 未初始化。尚未调用open()
            // console.log(xhr);
            consoleXHR(xhr);
        }
        if (xhr.readyState === 1) {
            // 1: 启动但未发送。已open() 未send()
            // console.log(xhr);
            consoleXHR(xhr);
        }
        if (xhr.readyState === 2) {
            // 2: 已发送。已send()
            // console.log(xhr);
            consoleXHR(xhr);
        }
        if (xhr.readyState === 3) {
            // 3: 开始接收。
            // console.log(xhr);
            consoleXHR(xhr);
        }
        if (xhr.readyState === 4) {
            // 4. 已接收全部数据响应。通常只用这个
            // console.log(xhr);
            consoleXHR(xhr);
        }
    };

    // IE8开始的超时事件
    xhr.timeout = 1000;
    xhr.ontimeout = () => { }

    // firefox引入的，给xhr强制指定response的Content-Type
    // xhr.overrideMimeType('application/json')



    setHeaders(xhr, headers);

    const finalData = (method === 'get' || method === 'GET') ? null : data;
    xhr.send(finalData);



    // 同步写法
    // const { status } = xhr;
    // if ((status >= 200 && status < 300) || status === 304) {
    // consoleXHR(xhr);
    // }
}




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
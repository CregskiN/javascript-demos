
function ajax(options) {
    const {
        method,
        url,
        data,
        params,
        headers,
        success,
        error,
    } = options;

    const xhr = new XMLHttpRequest();

    // 捕捉进程事件
    // handleProcess(xhr);

    // 格式化url
    const finalURL = method === 'GET' ? generateURL(url, params) : url;

    xhr.open(method, finalURL, true); // 是否异步

    // 捕捉response
    xhr.onreadystatechange = handleResponse(xhr, success, error);

    // IE8开始的超时事件
    xhr.timeout = 1000;
    xhr.ontimeout = () => { }


    // handleSetMIMEType(xhr, MIME);

    handleSetHeaders(xhr, headers);
    let finalData = method === 'GET' ? null : JSON.stringify(data);
    xhr.send(finalData);
}

/**
 * 将参数添加至url
 * @param {*} url 
 * @param {*} data 
 */
function generateURL(url, params) {
    const res = url;

    if (Object.prototype.toString.call(data) === '[object Object]') {
        let query = '';
        for (let key in params) {
            query += (`${key}=${params[key]}&`);
        }
        query = query.substr(0, query.length - 1);
        query = window.encodeURI(query);
        res = url + '?' + query;
    } else {
        console.error('只支持对象类型转query url传参');
    }
    return res;
}

/**
 * 响应事件
 * @param {*} xhr 
 */
function handleResponse(xhr, success, error) {
    return () => {
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
    }
}

/**
 * 设置request header
 * @param {*} xmr 
 * @param {*} headers 
 */
function handleSetHeaders(xhr, headers) {
    if (Object.prototype.toString.call(headers) === '[object Object]') {
        for (let key in headers) {
            xhr.setRequestHeader(key.toString(), headers[key].toString());
        }
    }
}


function handleSetMIMEType(xhr, MIME) {
    // firefox引入的，给xhr强制指定response的Content-Type
    xhr.overrideMimeType(MIME);
}

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
 * 捕捉进程事件
 * @param {*} xhr 
 */
function handleProcess(xhr) {
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
}
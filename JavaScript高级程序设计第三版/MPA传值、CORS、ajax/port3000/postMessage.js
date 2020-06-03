document.cookie = 'name=cregskin'; // 设置cookie
let child = null;



/**
 * 向子窗口发送信息
 * @param {*} event 
 */
function formSubmit(event) {
    var formElem = document.getElementsByTagName('input');
    var account = formElem[0].value;
    var password = formElem[1].value;
    child.postMessage({
        account,
        password,
        type: 'form'
    }, 'http://localhost:3001/child.html');
}


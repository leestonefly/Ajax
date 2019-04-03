myButton.addEventListener('click', (e) => {

    window.jQuery.ajax({
        url: '/xxx',
        method: 'post',
        body: 'a=1&b=2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'frank': '18'
        },
        successFn: (x) => {
            console.log(x)
        },
        failFn: (x) => {
            console.log(x.status);
            console.log(x.responseText)
            f1(x);
        }
    })
});
function f1(request){}


window.jQuery = function (nodeOrSelector) {
    let nodes = {};
    nodes.addClass = function () {
    };
    nodes.html = function () {
    };
    return nodes;
};

window.jQuery.ajax = function ({url,method,body,success,fail,headers}) {
    //多个参数写法
    // let url;
    // if(arguments.length ===1){
    //     url = options.url;
    // }else if(arguments.length ===2){
    //     url = arguments[0];
    //     options = arguments[1];
    // }

    let request = new XMLHttpRequest();
    if (Math.random() > 0.5) {
        request.open(method, url);
    } else {
        request.open(method, '/yyy');
    }
    for (let key in headers) {
        let value = headers[key];
        request.setRequestHeader(key, value);
    }

    request.onreadystatechange = () => {
        // request.readyState 状态码(1-4)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                success.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                fail.call(undefined, request)
            }
        } else {

        }
    };
    request.send(body);
};

window.$ = window.jQuery;
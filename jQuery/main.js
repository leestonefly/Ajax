myButton.addEventListener('click', (e) => {

    window.jQuery.ajax({
        url: '/xxx',
        method: 'post',
        body: 'a=1&b=2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'frank': '18'
        },

    }).then((text)=>{console.log(text)},
        (request)=>{console.log(request.status)})
});

function f1(request) {
}


window.jQuery = function (nodeOrSelector) {
    let nodes = {};
    nodes.addClass = function () {
    };
    nodes.html = function () {
    };
    return nodes;
};

window.jQuery.ajax = function ({url, method, body, headers}) {
    return new Promise(function (resolve, reject) {
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
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        };
        request.send(body);
    });
};

window.$ = window.jQuery;
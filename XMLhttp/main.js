myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest();
    request.open('GET','/xxx');
    request.send();
    request.onreadystatechange=()=>{
        // request.readyState 状态码
        if(request.readyState===4){
            if(request.status >= 200 && request.status <300){
                //返回文本内容
                let string = request.responseText;

                // request.responseXML 返回XML
                //处理XML
                // let parser = new DOMParser();
                // let xmlDoc = parser.parseFromString(string,'text/html');
                // xmlDoc.getElementsByTagName('body')[0].textContent;

                // 处理json
                let object = window.JSON.parse(string);
                console.log(object);

            }else if(request.status >= 400){
                console.log('请求失败')
            }

        }else{

        }
    };

});
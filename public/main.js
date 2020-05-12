let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send()
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            //可以把符合JSON语法的字符串变成对象或者其他符合的东西
        myName.textContent = object.name
        }
    };
    request.send()
}


getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
        }
    };
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onload = () => {
        const div = document.createElement('div')
        //创建div标签
        div.innerHTML = request.response
        //填写div内容
        document.body.appendChild(div)
        //插到身体里
    };
    request.onerror = () => { }
    request.send()
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js")
    request.onload = () => {
        const script = document.createElement('script')
       //创建script标签
        script.innerHTML = request.response
        //填写script内容
        document.body.appendChild(script)
        //插到身体里
     }
    request.onerror = () => { }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            //如果请求的读取情况等于4，表示下载完成，但不知道是成功2xx,还是失败4xx 5xx
            if (request.status >= 200 && request.status<300) {
                //request.status(请求情况)
                const style = document.createElement('style');
                //创建style标签
                style.innerHTML = request.response;
                //填写style内容
                document.head.appendChild(style);
            //插到头里面
            } else {
                alert('加载 CSS失败')
                //alert(警告)
            }         
        };
    };
    request.send()  // readyState =2
};

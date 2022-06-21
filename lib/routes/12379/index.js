var url = "https://pbs.twimg.com/media/FVI5gjGXEAg_rdY?format=jpg&name=orig"
 
var time = 10000;
var timeout = false;
var request = new XMLHttpRequest();
var timer = setTimeout(function() {
    timeout = true;
    request.abort();
}, time);
 
request.open("GET", url);
request.onreadystatechange = function() {
 
    if (request.status === 200) {
        // 打印出网页结果
        console.log(request.responseText);
 
    }
 
}
;
 
request.send(null);

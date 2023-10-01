const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello this is Rana Singh</h1>");
    resp.end();
}).listen(3000)
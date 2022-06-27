//http,url,querystring,path etc...

//ports from 1000 to anywhere around 30,000

const http=require("http");
// console.log(http);
http.createServer(function(request,response){
    //console.log(request.headers.referer)
    //console.log(request.url)
    if(request.url=="/"){
    response.end("Hello World,Welcome to the NodeJS core module");}
    else if(request.url=="/employee"){
     response.end("Hello World,Welcome to the employee end point");}

    else{
response.end("please contact Admin");
    }
}).listen(1234)

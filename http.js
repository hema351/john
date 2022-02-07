const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("welcome to our home page");
    }
    if(req.url==='/about')
    {
        res.end("this is our about info");

    }
    res.end(`<h1>oops!</h1>,<p>u have entered the wrong page</p>
    <a href="/">back home</a>`);
})
server.listen(5000)
const{readfile,writefile}=require('fs');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/result1.txt',`here is the result:${first},${second}`,(err,result)=>{
            if(err)
            {
                console.log(err);
            }
            console.log(result);
        })
    })

})
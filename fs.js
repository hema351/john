const{readFileSync,writeFileSync}=require('fs');
const read1=readFileSync('./content/firsttext.txt','utf8');
const read2=readFileSync('./content/secondtext.txt','utf8');
console.log(read1,read2);
writeFileSync('./content/result.txt',`the result is:${'read1'},${read2}`,{flag:'a'},{flag:'b'})

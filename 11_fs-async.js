// please explain difference between read file and read file sycn 



const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err)
    }
    
    console.log(res);
})







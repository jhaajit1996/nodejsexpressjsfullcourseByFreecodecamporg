const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write('welcomt to our page');
//     res.end();
// })

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our page');
    } else if (req.url === '/about') {
        res.end('here is our short history');
    }

    res.end(`<h2>oops</h2>
        <p>you have visited the error page </p>`);

})

server.listen(5000);
var http = require('http'); // 

var server = http.createServer(function (req, res) {   
    if (req.url == '/') { 
        

        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
    
        res.write('Welcome to my Node Js project');
        res.end();
    
    }
    else if (req.url == "/home") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome home');
        res.end();
    
    }
    else if (req.url == "/about") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to About Us page');
        res.end();
    
    }
    else if (req.url == "/node") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to my Node Js project');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
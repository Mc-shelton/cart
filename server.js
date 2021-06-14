const http = require('http')
const port = 3000
const fs = require('fs')

const server = http.createServer(function(req, res){
res.writeHead(200,{'content-Type':'text/html'})
res.writeHead(200, {'conent-Type':'text/css'})
fs.readFile('archives.html', function(error, data){
    if(error){
        res.writeHead(404)
        res.write('erro.file not found')
    }else{
        res.write(data)
    }
    res.end()
})
fs.readFile('archives.css', function (error, data){
    if (error){
        res.writeHead(404)
        res.write('error.file not found')
    }
    else{
        res.write(data)
    }
    res.end()
});
})

server.listen(port, function(error){
    if (error){
        console.log ('something was wrong')
    }
    else{
        console.log('server is listening on port ' + port)
    }
})
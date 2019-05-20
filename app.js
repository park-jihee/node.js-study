//채팅창 구현을 위한 모듈 불러오기
const express = require('express')
const socket = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socket(server)
const fs = require('fs')//파일접근모듈

app.use('/css', express.static('./static/css'))
app.use('/images', express.static('./static/images'))
app.use('/js', express.static('./static/js'))

app.get('/', function(request, response) {
    fs.readFile('./static/index.html', function(err,data){
        if(err){
            response.send('에러가 발생하였습니다.')
        }else{
            response.writeHead(200, {'Content-type':'text/html'})
            response.write(data)
            response.end()
        }
    })
})

app.get('/index.html', function(request, response) {
    fs.readFile('./static/index.html', function(err,data){
        if(err){
            response.send('에러가 발생하였습니다.')
        }else{
            response.writeHead(200, {'Content-type':'text/html'})
            response.write(data)
            response.end()
        }
    })
})

app.get('/login.html', function(request, response) {
    fs.readFile('./static/login.html', function(err,data){
        if(err){
            response.send('에러가 발생하였습니다.')
        }else{
            response.writeHead(200, {'Content-type':'text/html'})
            response.write(data)
            response.end()
        }
    })
})

app.get('/info.html', function(request, response) {
    fs.readFile('./static/info.html', function(err,data){
        if(err){
            response.send('에러가 발생하였습니다.')
        }else{
            response.writeHead(200, {'Content-type':'text/html'})
            response.write(data)
            response.end()
        }
    })
})

app.get('/join.html', function(request, response) {
    fs.readFile('./static/join.html', function(err,data){
        if(err){
            response.send('에러가 발생하였습니다.')
        }else{
            response.writeHead(200, {'Content-type':'text/html'})
            response.write(data)
            response.end()
        }
    })
})

app.get('/portfolio.html', function(request, response) {
    fs.readFile('./static/portfolio.html', function(err,data){
        if(err){
            response.send('에러가 발생하였습니다.')
        }else{
            response.writeHead(200, {'Content-type':'text/html'})
            response.write(data)
            response.end()
        }
    })
})

server.listen(3000, function(){
  console.log('서버기동중...')  
})










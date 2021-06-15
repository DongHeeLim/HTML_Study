var http = require('http');
var fs = require('fs');
var SerialPort = require("serialport");

var index = fs.readFileSync('index.html');

const parsers = SerialPort.parsers;

// 읽는 방식 선언 , 구분자 정하기
const parser = new parsers.Readline({
  delimiter:'\r\n'
});

var port = new SerialPort('COM12',{
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

port.pipe(parser);
var app = http.createServer(function(request, response){
  response.writeHead(200, {'Context-Type':'text/html'});
  response.end(index);
});

// 웹 브라우저 연결 확인
var io = require('socket.io').listen(app);
io.on('connection', function(data){
  console.log('Node.js is listening!');
});

parser.on('data',function(data){
  // console.log(data);   // 시리얼 통신 데이터 터미널 출력
  io.emit('data', data);  // 데이터 전송
});

app.listen(3000);

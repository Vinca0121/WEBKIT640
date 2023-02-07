const http = require("http");
const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.static('temp'));
app.set("view engine", "ejs");
app.set("views", "./template");

app.get("/", (req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
    res.write("<h1>환영합니다~~!</h1>");
    res.write("<a href='ex03.html'>ex01_1</a>");
    res.end();
});

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("서버 실행 중 : localhost:3000");
});








// nodejs 설치하면 npm이 같이 설치 된다.
// npm : 팩키지 매니저
// 자동으로 모듈을 설치하고 제거 하고 관리한다.
// npm install --save 모듈
// npm i -S 모듈
// --save : 현재 프로젝트에 저장. -S
// --svae-dev : 개발환경에서만 사용. -D
// -g : 글로벌 환경에 저장
// npm unintall -g 모듈
// npm list -g --depth=0
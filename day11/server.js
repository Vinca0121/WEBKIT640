const express = require('express');
const app = express();
const cors = require('cors');
var formidable = require('formidable');


app.set("port", 3000);

console.log(__dirname, "<< 절대 경로로 지정");

// ejs를  사용할 때
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(cors());
app.use(express.static(__dirname + "/public"));


app.get("key") // getAttribute의 용도
app.get("/", (req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
    res.write("<h1>Hello world</h1>");
    res.end();
});

app.post("/people/input", (req, res)=>{
    var form = new formidable.IncomingForm();
    console.log(req.body);   
})

// http와 express의 결합 - 같은 port를 공유한다.

//const http = require('http');
//const server = http.createServer(app);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
})

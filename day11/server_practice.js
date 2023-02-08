const express = require('express');
const app = express();
const cors = require('cors');
var formidable = require('formidable');
var fs = require('fs');
var util = require('util');


app.set("port", 3000);

//console.log(__dirname, "<< 절대 경로로 지정");

// ejs를  사용할 때
//app.set("view engine", "ejs");
//app.set("views", __dirname + "/views");

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("key") // getAttribute의 용도
app.get("/", (req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
    res.write("<h1>Hello world</h1>");
    res.end();
});

app.post("/people/input", function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(util.inspect({fields: fields, files: files}))

        
        // var oldpath = files.photo_file.filepath;
        // var newpath = __dirname + "/images/" + files.photo_file.originalFilename;
        // const rs = fs.createReadStrseam(oldpath);
	    // const ws = fs.createWriteStream(newpath);
	    // rs.pipe(ws);
    res.write(`success1`);
    })
})


app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
})

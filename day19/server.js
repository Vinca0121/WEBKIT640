const express = require("express");
const app = express();
const router = express.Router();
const multer = require("multer");


app.set("port", process.env.PORT || 3000);

app.use(express.static("public"));
app.use(express.static("uploads"));

app.use("/", router);
// POST 전송 방식을 사용하기 때문에 bodyParser가 먼저 선언되어야 한다.
let diskStorage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "uploads");
    },
    filename: function(req, file, callback){
        callback(null, Date.now() + file.originalname);
    }
});

//파일 제한 : 10, 1G 이하
let upload = multer({
    storage: diskStorage,
    limit : {
        files : 10,
        fileSize : 1024 * 1024 * 1024
    }
})

//new day19
router.route("/process/photo").post(upload.array("MyfileName", 10), (req, res)=>{
    res.end("filed uploaded");
})

// router로의 


/////// error handler -----
var expressErrorHandler = require('express-error-handler');
var errorHandler = expressErrorHandler({
    static : {
        '404':'./public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404) );
app.use(errorHandler );


app.listen(3000, () => {
  console.log("Node.js 서버 실행 중 ... http://localhost:" + 3000);
});
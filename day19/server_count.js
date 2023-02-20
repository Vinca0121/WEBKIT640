// 웹 counter 예제
const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();

let cnt = 0;
router.route("/count").get((req, res)=>{
    console.log("GET - /count");
    cnt++;  // cnt += 1
    let date = new Date();
    let responseData = {
      cnt : cnt,
      dateStr : date.getFullYear()+"-"
      +(date.getMonth()+1)+"-"+(date.getDate())+" "+(date.getHours())+":"
      +(date.getMinutes()),
      date : date
    }

    //res.end(cnt + ""); // res.end(); <-- 문자열만 사용.
    //res.send({cnt});
    res.end(JSON.stringify(responseData));
});
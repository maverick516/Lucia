const express = require("express"); // npm i express | yarn add express
const cors = require("cors");    // npm i cors | yarn add cors
const mysql = require("mysql");   // npm i mysql | yarn add mysql
const app = express();
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = 3001; // 포트번호 설정

// MySQL 연결
const db = mysql.createPool({
  host: "192.168.10.45", // 호스트
  user: "loretech",      // 데이터베이스 계정
  password: "loretech!2",      // 데이터베이스 비밀번호
  database: "Lucia",  // 사용할 데이터베이스
});

app.use(cors({
  origin: "*",                // 출처 허용 옵션
  credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  
  res.sendFile(__dirname + '/battery.html');
});

// 쿼리
app.get("/list", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const sqlQuery = "SELECT * FROM BuyList";

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get("/info", (req, res) => {
  const getHtml = async () => {
    try {
      return await axios.get("http://localhost:3001/");
      // 해당 사이트 html 태그 가져오기
    } catch (error) {
      console.error(error);
    }
  };
  
  getHtml()
    .then((html) => {
      const $ = cheerio.load(html.data);
      let parentTag = $("div");
      // 크롤링할 태그 찾기

      let resultArr = [];
      parentTag.each(function (i, elem) {
        console.log($(this).text());
        // let itemObj = {
        //   text: $(this).find("strong").text(),
        //   num: $(this).find("span").text(),
        // };
        // resultArr.push(itemObj);
      });

      // resultArr.forEach((elem) => {
      //   console.log(`현재 ${elem._text}의 현황 : ${elem._num}`);
      // });
      // return resultArr;
    })
    .then((data) => res.send(data));
});
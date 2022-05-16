const { request } = require("express");
const express = require("express"); // php의 connect 비슷
const app = express();
const dotenv = require("dotenv");   // mongoose 연결을 위한 dotenv 설정
const mongoose = require("mongoose"); // const {default: mongoose} = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config(); // 환경변수 설정
app.use(express.json()); // 모든 파일을 json 파일로 설정

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("mongoose db 연결됨"))
  .catch((error) => {
    console.log("error");  // 오류가 날때 error 문자열 출력
  }); // mongoose 연결

  // 가상 주소 설정
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute); 
app.use("/api/posts", postRoute); 
app.use("/api/Category", categoryRoute); 

app.listen(3005, () => {
  console.log("Backend server is running");
}); // 서버에 연결을 위한 포트 번호

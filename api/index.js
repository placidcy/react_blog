const { request } = require("express");
const express = require("express"); // php의 connect 비슷
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config(); // 환경변수 설정
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("mongoose db 연결"))
  .catch((error) => {
    console.log("error");
  }); // mongoose 연결

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(3005, () => {
  console.log("Backend server is running");
}); // 서버에 연결을 위한 포트 번호

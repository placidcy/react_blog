const mongoose = require("mongoose");

// php의 회원에 대한 데이터(테이블) 만드는 기능과 같음
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String, 
      required: true, // 입력 필요 설정
      unique: true, // 중복 가능 설정
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema); // 테이블 이름 설정

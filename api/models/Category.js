const mongoose = require("mongoose");

// php의 회원에 대한 데이터(테이블) 만드는 기능
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema); // 테이블 이름 설정

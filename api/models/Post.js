const mongoose = require("mongoose");

// php의 회원에 대한 데이터(테이블) 만드는 기능
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    desc: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
    },

    username: {
      type: String,
      required: true,
    },

    category: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema); // 테이블 이름 설정

const router = require("express").Router(); // 주소 설정
const User = require("../models/User");
const bcrypt = require("bcrypt"); // 비밀번호 암호화 설정

// 회원가입
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// 로그인
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("회원이 존재하지 않음");

    //암호화된 비밀번호 확인
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("회원이 존재(비밀번호)하지 않음");

    // 비밀번호 제외한 나머지 값만 저장(?)
    const {password, ...others} = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

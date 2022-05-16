const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); 

// 회원 정보 수정(php의 get)
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10); // 비밀번호 암호화 함수(10개의 암호로 만들어짐)
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true});
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("자신의 계정만 수정 가능합니다");
    }
});

// 회원 정보 삭제하기
router.delete("/:id", async (req, res) => {
    // 자신의 아이디와 등록된 아이디가 같을때 찾아서 삭제
    if(req.body.userId === req.params.id) {
        try {
            //const user = await User.findById(req.params.id);
            try {
                // 회원 정보 데이터 삭제
                //await Post.post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("회원 정보가 삭제되었습니다");
            } catch(error) {
                res.status(500).json(error);
            }
        } catch(error) {
            res.status(404).json("해당하는 회원 정보가 없습니다");
        }
    } else {
        res.status(401).json("자신의 계정만 삭제 가능합니다");
    }
});

// 회원 정보 가져오기
router.get("/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        //...others : 회원의 세부 정보를 가져오는 변수
        const {password, ...others} = user._doc; // 비밀번호를 제외한 나머지 정보들을 가져옴
        res.status(200).json(others);
    } catch(error) {
        res.status(500).json(error);
    }
});

module.exports = router;
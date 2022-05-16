const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// 포스트(글 작성) 생성
router.post("/", async (req, res) => {
    const newPost = new Post(req.body); 
    try {
      const savedPost = await newPost.save(); // newPost의 데이터를 저장
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// 포스트 수정
router.post("/:id", async(req, res) => {
    try {
        const modifiedpost = await Post.findById(req.params.id);
        if(modifiedpost.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true}); // req.body : Post.js의 데이터
                res.status(200).json(updatePost);
            } catch(error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("자신이 올린 글만 볼 수 있음");
        }
    } catch(error) {
        res.status(500).json(error);
    }
});

// 포스트 삭제
router.delete("/id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("글 삭제됨");
            } catch(error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("자신이 올린 글만 볼 수 있음");
        }
    } catch(error) {
        res.status(500).json(error);
    }
});

// 포스트 가져오기
router.get("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(error) {
        res.status(500).json(error);
    }
});

// 모든 포스트 가져오기
router.get("/:id", async(req, res) => {
    const username = req.query.user;
    const categoryName = req.query.cat;

    try {
        let posts;

        if(username) {
            posts = await Post.find({username});
        } else if(categoryName) {
            posts = await Post.find({categories : {$in: [categoryName]}});
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch(error) {
        res.status(500).json(error);
    }
});

module.exports = router;
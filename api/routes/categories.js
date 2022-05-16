const router = require("express").Router();
const Category = require("../models/Category");

// 카테고리 만들기
router.post("/", async(req, res) => {
    const newCategory = new Category(req.body);

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});
// 카테고리 가져오기
router.get("/", async(req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
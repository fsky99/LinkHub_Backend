const express = require("express")
const router = express.Router()

const postCtrl = require("../controllers/post")

router.get("/", postCtrl.findAllPosts)
router.get("/:id", postCtrl.findPost)
router.post("/", postCtrl.createPost)
router.put("/:id", postCtrl.updatePost)
router.delete("/:id", postCtrl.deletePost)
module.exports = router

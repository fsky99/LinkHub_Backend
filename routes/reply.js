const express = require("express")
const router = express.Router()

const replyCtrl = require("../controllers/reply")

router.get("/", replyCtrl.findAllReplies)
router.get("/:id", replyCtrl.findReply)
router.post("/", replyCtrl.createReply)
router.put("/:id", replyCtrl.updateReply)
router.delete("/:id", replyCtrl.deleteReply)
module.exports = router

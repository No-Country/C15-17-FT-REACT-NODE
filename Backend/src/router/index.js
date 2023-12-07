const { Router } = require('express')
const post=require("./postRoute")
const login=require("./loginRoute")

const router = Router()

router.use("/login", login)
router.use("/post", post)

module.exports = router
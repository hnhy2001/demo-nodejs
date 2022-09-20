const express = require("express")
const router = express.Router()
const homeController = require("../controller/user.controller")
router.get("/", homeController.user)
router.post("/add", homeController.createUser)
router.get("/:id", homeController.detail)
router.delete("/delete/:id", homeController.remove)
router.put("/update/:id", homeController.update)
module.exports = router
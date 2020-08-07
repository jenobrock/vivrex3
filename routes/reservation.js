const express=require("express")
const router=express.Router()
const controller=require("../controller/reservation")

router.get("/reservation",controller.getHome);
module.exports = router;
const express=require("express")
const router=express.Router()
const controller=require("../controller/home")

router.post("/detail",controller.getDetail)
.get("/",controller.getHome)
.post("/addcart",controller.addcart)

      

  module.exports=router; 
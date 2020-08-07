const express=require("express")
const router=express.Router()
const controller=require("../controller/panier")

router.get("/panier",controller.getHome)
.post("/commande",controller.commande)
module.exports = router;
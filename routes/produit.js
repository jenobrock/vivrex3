const express=require("express")
const router=express.Router()
var produits=require("../data/produit");
const controller=require("../controller/produit")


router.get("/produit",controller.getHome)


module.exports = router;
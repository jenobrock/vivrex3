const express=require("express")
const router=express.Router()

const controller=require("../controller/admin")


router.get("/adminHome",controller.getHome)
      .get("/adminHomeAjouter",controller.getHomeAjouter)
      .post("/updateProduit",controller.getHomeUpdate)
      .post("/adminUpdateProduit",controller.UpdateProduct)
      //.get("/adminCommande")
      .get("/admingetAddProduct", controller.getAddProduct)
      .post("/adminAddProduit",controller.AddProduct)
      .post("/deleteProduct",controller.deleteProduct)
module.exports = router;
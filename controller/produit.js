

var produits=require("../data/produit");




const getHome=(req,res)=>{
    res.render("produit",{
      produit:produits,
        path:"/produit"
    })
}

exports.getHome=getHome;
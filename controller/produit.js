

var produits=require("../data/produit");




const getHome=(req,res)=>{
  Product.find().then(produit=>{
    res.render("produit",{
      produit:produit,
      path:"/home",
      user:req.user
    })
  }).catch(err=>{
    console.log(err)
  })

  
}

exports.getHome=getHome;

Product = require("../model/produit");

 

const getHome=(req,res)=>{
  //console.log(req.user);
    produit=produits
    Product.find().then(produit=>{
      res.render("index",{
        produit:produit,
        path:"/home",
        user:req.user
      })
    }).catch(err=>{
      console.log(err)
    })

    
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

  const getDetail=(req,res)=>{
    const id = req.body.id;
    console.log(id);
    
    
    // produit=produits
      Product.findById(id).then(produit=>{
       // console.log(produit);
        res.render("detail",{
         prod:produit,
          path:"/home",
          user:req.user
        })
     }).catch(err=>{
        console.log(err)
      })
  
     
    } 
    
    const addcart=(req,res)=>{
      console.log(req.body)
      Product.findById(req.body.id)
      .then(product => {
        req.user.addToCart(product,req.body.quantite)
        Product.find().then(produit=>{
          return res.render("index",{
            produit:produit,
            path:"/home",
            user:req.user
          })
        })
         
      }).then(product=>{
        console.log(product)
      }).catch(err=>{
        console.log(err)
      })
    }



exports.getDetail=getDetail;
exports.addcart=addcart;
exports.getHome=getHome;

const produit = require("../model/produit");

Product = require("../model/produit");

const getHome = (req, res) => {
  Product.find().then(produit=>{
    res.render("admin", {
      path: "/admin",
      produit:produit,
      p:"voir",
      user:req.user
    });
  }).catch(err=>{
    console.log(err)
  })
  
};

const getHomeAjouter = (req, res) => {
  Product.find().then(produit=>{
    res.render("admin", {
      path: "/admin",
      produit:produit,
      p:"ajouter",
      user:req.user
    });
  }).catch(err=>{
    console.log(err)
  })
  
};

const getHomeUpdate = (req, res) => {
  const id = req.body.id;
console.log(id);
  Product.findById(id).then(produit=>{
    res.render("admin", {
      path: "/admin",
      produit:produit,
      p:"modifier",
      user:req.user
    });
  }).catch(err=>{
    console.log(err)
  })
  
};

const getAddProduct = (req, res) => {
  res.render("addProd", {
    path: "/adminAdd",
    user:req.user
  });
};

const AddProduct = (req, res, next) => {
  const nom = req.body.nom;
  const image = req.file;
  const prix = req.body.prix;
  const description = req.body.descr;
  const categorie = req.body.categorie;
  img = "";
  if (image) {
    img = image.filename;
  }
  console.log(req.body)
  const product = new Product({
    nom: nom,
    prix: prix,
    image: img,
    description: description,
    categorie:categorie
  });
  product
    .save()
    .then((result) => {
      res.redirect('/adminHome')
    })
    .catch((err) => {
      console.log(err);
    });
  // res.redirect('/adminHome');
};

const UpdateProduct = (req, res, next) => {
  const id = req.body.id
  const nom = req.body.nom;
  const image = req.file;
  const prix = req.body.prix;
  const description = req.body.descr;
    const categorie = req.body.categorie;

  img = "";
  if (image) {
    img = image.filename;
  }
  console.log(req.body)
  Product.findById(id).then(produit=>{
  produit.nom= nom
  produitprix= prix
  produit.image= img,
  produit.description= description,
  produit.categorie =categorie

  produit
    .save()
    .then((result) => {
      res.redirect('/adminHome')
    })
  }).catch((err) => {
      console.log(err);
    });
  
  
    
  // res.redirect('/adminHome');
};


const deleteproduct = (req,res,next)=>{
  const id = req.body.id;
  console.log(id);
  Product.deleteOne({_id:id}).then(resultat=>{
    res.redirect('/adminHome');


  }).catch(err=>{
    console.log(err);
  })


}
exports.getHome = getHome;
exports.getHomeAjouter = getHomeAjouter;
exports.getHomeUpdate = getHomeUpdate;
exports.getAddProduct = getAddProduct;
exports.AddProduct = AddProduct;
exports.UpdateProduct = UpdateProduct;
exports.deleteProduct = deleteproduct;

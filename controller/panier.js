Product = require("../model/produit");
Commande = require("../model/commande")




const getHome = (req, res) => {

    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            const products = user.cart.items;
            //for(let port of products){
            console.log(products);
            /// }
            res.render('panier', {
                produit: products,
                user: req.user, path: "/panier"
            });
        })
        .catch(err => console.log(err));

}
const commande = (req, res) => {
    let Total = 0;
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            const products = user.cart.items;
            console.log(products)

            const commande = new Commande({user:req.user._id,date:Date.now(),contenu:{items:[...user.cart.items]} });
            commande.save();
           /* for (let port of products) {
                Product.findById(port.productId._id).then(produit => {

                }).catch(err => {
                    console.log(err);
                })
                Total += port.quantity;
            }
            console.log(Total);*/
            res.render('panier', {
                produit: products,
                user: req.user, path: "/panier"
            });
        })
        .catch(err => console.log(err));


}

exports.commande = commande;
exports.getHome = getHome;
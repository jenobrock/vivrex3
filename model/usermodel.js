const mongoose=require("mongoose");
const schema=mongoose.Schema;


const user = new schema({
    nom: {
      type: String,
      required: true,
    },
    prenom: {
        type: String,
        required: true,
      },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default:"client"
    },
    cart: {
      items: [
        {
          productId: {
            type: schema.Types.ObjectId,
            ref: 'Produit',
            required: true
          },
          quantity: { type: Number, required: true }
        }
      ]
    },
  });



  user.methods.addToCart = function(product,quantit) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = quantit;
    const updatedCartItems = [...this.cart.items];
  
  //  if (cartProductIndex >= 0) {
   //   newQuantity = this.cart.items[cartProductIndex].quantity + 1;
  //    updatedCartItems[cartProductIndex].quantity = newQuantity;
  //  } else {
      updatedCartItems.push({
        productId: product._id,
        quantity: newQuantity
      });
   // }
    const updatedCart = {
      items: updatedCartItems
    };
    this.cart = updatedCart;
    return this.save();
  };

  module.exports=mongoose.model('User',user);
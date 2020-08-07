const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SchemaCommande=new Schema({
  user:{
    type:String,
    require:true
  },
  date:{
    type:Date,
    require:true
  },
  contenu:{
    items: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: 'Produit',
            required: true
          },
          quantity: { type: Number, required: true }
        }
      ]
  }
});
module.exports = mongoose.model('Commande',SchemaCommande);
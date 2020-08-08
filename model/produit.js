const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SchemaProduit=new Schema({
  nom:{
    type:String,
    require:true
  },
  prix:{
    type:Number,
    require:true
  },
  image:{
    type:String,
    require:true
  },
  categorie:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
  }
});
module.exports = mongoose.model('Produit',SchemaProduit);
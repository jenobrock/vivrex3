const express=require("express");
const app=express();
const homeRoute=require("./home");
const produitRoute=require("./produit");
const adminRoute=require("./admin");
const panierRoute=require("./panier");
const reservationRoute=require("./reservation");
const userRoute=require("./users");


app.use(homeRoute);
app.use(produitRoute);
app.use(adminRoute);
app.use(reservationRoute);
app.use(panierRoute);
app.use(userRoute);

module.exports=app;
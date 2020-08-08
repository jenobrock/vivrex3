const db = require("../model/usermodel");
User = require("../model/usermodel");

const bcrypt = require("bcryptjs");


const preg=(req,res)=>{
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const phone = req.body.phone;
  const pass1 = req.body.password;
  const pass2 = req.body.password2;
  if(pass1!=pass2){
    console.log('erreur password')
   return res.render("register", {
     path: "/user",
     user:req.user
   });
  }
  User.findOne({phone:phone})
  .then(user=>{
    if(user){
      console.log("numero deja utilisé");
      return res.render("register", {
        path: "/user",
        user:req.user
      });
    }
    return bcrypt
    .hash(pass1, 12).then((hashed) => {
      const user = new User({
        nom : nom,prenom:prenom,phone: phone,password:hashed , cart:{items:[],type:"client"}
      });
      user.save()
      .then((result) => {
        console.log(result);
        res.redirect('/login')
      })

    })
  })
  
   
//const nom1 =nom+" "+prenom;
  //console.log(user);

  .catch((err) => {
    console.log(err);
  });

  /*res.render("register", {
    path: "/user",
  });*/
}
const getLogin = (req, res) => {
  res.render("login", {
    path: "/user",
    user:req.user
  });
};

const getRegister = (req, res) => {
  const user = req.body;
  console.log(user);
  res.render("register", {
    path: "/user",
    user:req.user
  });
};
const postLogin = (req, res) => {
  phone = req.body.phone;
  pass = req.body.password;
  User.findOne({ phone: phone }).then(user1 => {
    if (!user1) {
      console.log("no user found");
      res.redirect("/login");
    }
    console.log(user1.password);
   return bcrypt.compare(pass,user1.password).then(data => {
      console.log(data);
      if (data) {
        req.session.user=user1;
        console.log(user1.nom +" s'est connecté");
        return req.session.save(err => {
          console.log(err);
          res.redirect('/');
        });
      } else {
        console.log("password incorrect");
        res.redirect("/login");
      }
    })
  }).catch(err=>{
    console.log(err);
  })
};



exports.getLogin = getLogin;
exports.getRegister = getRegister;
exports.postLogin = postLogin;
exports.preg=preg
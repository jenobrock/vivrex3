const mongoose=require('mongoose');
const multer=require('multer');
var express = require("express");
var bodyParser = require("body-parser");
const session=require('express-session');
const MongoDBStore=require('connect-mongodb-session')(session);
var app = express();
const index=require("./routes/index")
//const uri="mongodb://localhost/test3";
const uri="mongodb+srv://jeno:tshimwana@vivrex.klvrq.mongodb.net/test3?retryWrites=true&w=majority";



app.set('views',  'views');
app.set('view engine', 'ejs');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toDateString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
app.use(
  multer({ fileFilter: fileFilter,storage:fileStorage }).single('file')
);
const store=new MongoDBStore({
  uri:uri,
  collection:'sessions'
});
app.use(
  session({secret:"une session", resave:false, saveUninitialized:false, store:store })
);
app.use((req, res, next) => {
  if (!req.session.user) {
    
    console.log("pas de session");
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if(user){
        req.user = user;

      }else{
        req.user =""
      }
      next();
    })
    .catch(err => console.log(err));
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(index)
app.use((req,res)=>{
  res.status(404).render("404",{path:""});
})

 
mongoose.connect("mongodb+srv://jeno:tshimwana@vivrex.klvrq.mongodb.net/test3?retryWrites=true&w=majority").then(
  result=>{
      app.listen(3000);
     //console.log(req.user);
  }
).catch(
  err=>{
      console.log(err);
  }
);
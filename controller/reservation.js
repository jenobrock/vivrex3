





const getHome=(req,res)=>{
    res.render("reservation",{
        path:"/reservation",
        user:req.user
    })
}

exports.getHome=getHome;
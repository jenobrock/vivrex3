





const getHome=(req,res)=>{
    res.render("reservation",{
        path:"/reservation"
    })
}

exports.getHome=getHome;
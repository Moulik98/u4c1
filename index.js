const express = require("express");

const app = express();

app.use(admin, logger);

app.get("/books",admin,function(req,res){
    return res.send({route:"/books"})
})


app.get("/libraries",admin,function(req,res){
    return res.send({route:"/libraries" , role:req.role})
})


app.get("/authors",admin,function(req,res){
    return res.send({route:"/authors" , role:req.role})
})


function admin(req, res , next){
    console.log("All route handler")
    next()
}

function logger(req, res , next){
    if(req.path === "/libraries"){
        req.role= "librarian"
    }
    else if(req.ath=== "/authors"){
        req.role = "authors"
    }
    else {
        req.role = "somebody"
    }
}
app.listen(5000 , () =>{
    console.log("in port 5000");
});

const express = require("express");

const app = express();

app.use(admin);

app.get("/books",admin,function(req,res){
    return res.send({route:"/books"})
})


app.get("/libraries",admin,function(req,res){
    return res.send({route:"/libraries"})
})


app.get("/authors",admin,function(req,res){
    return res.send({route:"/authors"})
})


function admin(req, res , next){
    console.log("All route handler")
    next()
}


app.listen(5000 , () =>{
    console.log("in port 5000");
});

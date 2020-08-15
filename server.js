const express = require("express");
 
const app = express();


app.get("/", function(req,res){
    res.send("Api Running Correctly");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT , function(){
    console.log(`Server Started at Port ${PORT}`);
})
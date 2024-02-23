const express=require ('express');
const db = require('./Database/Mysql');
const app=express ();

app.use('/',require("./routes/auth"))
app.listen(8000,()=>{
    console.log("Server running at port 8000");
    db.connect((err) => {
      if (err) {
        console.log(err); 
      }
      console.log("MySQL Database connected");
    })
})

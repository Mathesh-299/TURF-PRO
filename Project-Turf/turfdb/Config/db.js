const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://akash_2004:17112004akash@turf.dmmxb.mongodb.net/?retryWrites=true&w=majority&appName=TURF")

 const connection=mongoose.connection;

 connection.on('connected',()=>console.log("DB connected"))

 connection.on('error',()=>console.log("error"))
 
 module.exports=mongoose
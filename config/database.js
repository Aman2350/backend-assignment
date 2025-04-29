const mongoose = require("mongoose")

require("dotenv").config();  //jo bhi environment ke andar define kiya hai vo process object ke andr load aajayega
const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
 .then (()=> console.log('Db ka connection successfull'))
.catch((error) => {
    console.log('Issue in DB connection');
    console.error(error.message);
    process.exit(1);  
});
}   


module.exports = dbConnect;   
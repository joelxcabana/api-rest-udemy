const mongoose = require('mongoose')

const dataBaseConnect = () =>{
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedtopology:true
    },(err,res)=>{
        if(!err){
            console.log('>>>>>>>> CONECTADO A LA BD <<<<<<<<<<')
        }else{
            console.log('>>>>>>>> ERROR <<<<<<<<<<',err)
        }
    })
}

module.exports = dataBaseConnect
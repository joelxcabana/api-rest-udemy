const mongoose = require('mongoose')

const TraksSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type: {
                validator: (req) =>{
                    return true
                },
                message:'ERROR_URL'
            }
        },
        artist:{
            name:{
                type:String
            },
            nickname: {
                type:String
            },
            nationality: {
                type:String
            }
        },
        duartion:{
            start:{
                type:Number
            },
            end:{
                type:Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },{
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("traks",TraksSchema)
const mongoose = require('mongoose')


const cartSchema= mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    cartItem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    wishlistItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'wishlists'
    },
    quantity:{type:Number,default:1},
    isDelete:{type:Boolean,default:false}
},{
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model('carts',cartSchema)
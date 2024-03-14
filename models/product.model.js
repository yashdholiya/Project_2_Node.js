const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type : String,
        unique : true,
        required : true
    },
    productImage:{
        type: String,
        required : true
    },
    productPrice:{
        type: Number,
        required: true,

    },
    description:{
        type : String
    },
    categery:{
        type : String
    },
    productBrand:{
        type:String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports =  mongoose.model('products', productSchema);
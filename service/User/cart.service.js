const cart = require('../../models/cart.models')

module.exports= class cartServices{
    async addToCart(body){
        return cart.create(body)
    }
    async getCart(body){
        return cart.findOne(body)
    }
    async getAllCarts(body){
        return cart.find(body).populate('cartItem').populate(
            {
                path:'user',
                model:'users',
                select :'email name profileImage'
            }
        )
    }
    async updateCart(id,body){
        return cart.findByIdAndUpdate(id,{$set:body},{new:true})
    }
    async deleteCart(id){
        return cart.findByIdAndDelete(id)
    }
}
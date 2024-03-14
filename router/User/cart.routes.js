const express= require('express')
const cartRoute= express.Router()
const  { upload } = require('../../helper/imageuplode')
const {userVerifyToken} = require('../../helper/verifytoken')
const { addToCart, getAllCarts, updateCart, deleteCart } = require('../../controller/User/user.cart.controller')

cartRoute.post('/create-cart',upload.any(),userVerifyToken,addToCart)
cartRoute.get('/all-carts',upload.any(),userVerifyToken,getAllCarts)
cartRoute.put('/update-cart',upload.any(),userVerifyToken,updateCart)
cartRoute.delete('/delete-cart',upload.any(),userVerifyToken,deleteCart)

module.exports= cartRoute;
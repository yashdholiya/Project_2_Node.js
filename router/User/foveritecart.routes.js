const express= require('express')
const wishlistRoute= express.Router();
const { upload } = require('../../helper/imageuplode')
const { userVerifyToken} = require('../../helper/verifytoken')
const { addToWishlist, getAllWishlists } = require('../../controller/User/foveritecart.controller')

wishlistRoute.post('/add-wishlist',upload.any(),userVerifyToken,addToWishlist)
wishlistRoute.get('/get-All-wishlists',upload.any(),userVerifyToken,getAllWishlists)


module.exports = wishlistRoute;
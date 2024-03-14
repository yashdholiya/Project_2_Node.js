
const express= require('express')
const userRoute = express.Router()
const { addNewUser, getprofile, login, updateProfile, deleteAccount } = require('../../controller/user/user.controller')
const {upload} = require('../../helper/imageuplode');
const { userVerifyToken }  = require('../../helper/verifytoken');


userRoute.post('/add-user',upload.single('profileImage'),addNewUser);
userRoute.post('/user-login',upload.any(),login);
userRoute.get('/user-profile',upload.any(),userVerifyToken,getprofile);
userRoute.put('/user-update-profile',upload.single('profileImage'),userVerifyToken,updateProfile);
userRoute.delete('/user-delete-account',upload.any(),userVerifyToken,deleteAccount);


module.exports=userRoute
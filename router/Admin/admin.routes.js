const express = require('express');
const Admin = express.Router();
const { adminVerifyToken } = require('../../helper/verifytoken');
const { upload } = require('../../helper/imageuplode');
const { registerAdmin, getAllAdmin, getAdmin, updateAdmin, deleteAdmin, deleteAdminPer, loginAdmin, updatePassAdmin } = require('../../controller/Admin/admin.coltroller');

Admin.post('/add-Admin',upload.single('profileImage'),registerAdmin);
Admin.get('/login-Admin',upload.any(),loginAdmin);
Admin.get('/get-all-Admin',getAllAdmin);
Admin.get('/get-Admin',adminVerifyToken,getAdmin);
Admin.put('/update-Admin',adminVerifyToken,upload.single('profileImage'),updateAdmin);
Admin.put('/update-pass-Admin',adminVerifyToken,upload.any(),updatePassAdmin);
Admin.delete('/delete-Admin',adminVerifyToken,deleteAdmin);
Admin.delete('/delete-Per-Admin',adminVerifyToken,deleteAdminPer);

module.exports = Admin;
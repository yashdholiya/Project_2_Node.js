const express = require('express');
const productRoute = express.Router();
const { upload } = require('../../helper/imageuplode');
const { addproduct, getallproduct, updateProduct, deleteproduct, getproduct } = require('../../controller/Admin/product.Admin.controller');

productRoute.post('/addproduct', upload.single('productImage'),addproduct);
productRoute.get('/get-one',upload.none(),getproduct);
productRoute.get('/get-all', upload.none(), getallproduct);
productRoute.put('/update-product', upload.none(), updateProduct);
productRoute.delete('/delete-product', upload.none(), deleteproduct);

module.exports = productRoute;

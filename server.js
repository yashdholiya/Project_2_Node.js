require('dotenv').config();
const express = require('express');
const server = express(); 
const path = require('path');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const imagePath = path.join(__dirname,'public','images');
server.use('/public/images',express.static(imagePath));


const PORT = process.env.PORT;
const dbURL = process.env.MONGO_URL;


const productRoute = require('./router/Admin/product.admin.routes')
const admin = require('./router/Admin/admin.routes');
const userRoute = require('./router/User/user.routes');
const wishlistRoute = require('./router/User/foveritecart.routes');
const cartRoute = require('./router/User/cart.routes');

server.use('/api/user',userRoute)
server.use('/api/product',productRoute);
server.use('/api/admin',admin);
server.use('/api/favorite',wishlistRoute)
server.use('/api/cart',cartRoute)

server.listen(PORT, () => {
    try {
        mongoose.connect(dbURL);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
    console.log('Server is started at', `http://localhost:${PORT}`);
});

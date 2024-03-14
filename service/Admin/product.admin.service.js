const product = require("../../models/product.model")

module.exports = class productServices{
    //add product 

    async addproduct(body){
        try {
            let result = await product.create(body); 
            return result
        } catch (error) {
            return error.message;
        }
    };
     
    //get all product 
    async getallproduct (body){
        try {
            let result = await product.find(body)
            return result
        } catch (error) {
            return error.message
        }
    }; 
    // get specific
    async getspecific (id){
        try {
            let result = await product.findById(id)
            return result;
        } catch (error) {
            return error.message;
        }
    };

    async getProduct (body){
        try {
            let result = await product.findOne(body)
            return result;
        } catch (error) {
            return error.message;
        }
    };
  
    // update product
    async updateProduct(id, body) {
        try {
            let result = await product.findByIdAndUpdate(id, { $set: body }, { new: true });
            return result;
        } catch (error) {
            return error.message;
        }
    }

    //delete product
    async deleteProduct(id) {
        try {
            let result = await product.findByIdAndDelete(id);
            return result;
        } catch (error) {
            return error.message;
        }
    };
}
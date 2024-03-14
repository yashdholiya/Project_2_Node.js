const productServices = require('../../service/Admin/product.admin.service');
 const productService = new productServices();


 exports.addproduct = async(req , res)=>
 {
    try {
        let product = await productService.getProduct({productName: req.body.productName, isdelete: false});
        // console.log("oll product i ",product);
        if(product)
        {
            return res.json({massesge :"product is alredy exist please try again "});
        };
        if (req.file) {
            req.body.productImage = req.file.path.replace('\\', '/');
        };
        let newproduct = await productService.addproduct({...req.body})
        return res.json({ newproduct, message: "product succesfully added"})
    } catch (error) {
        console.log(error);
        return res.json({ message :"server  eror from product controller"});
    }
 };

 exports.getproduct = async(req , res)=>
{
    try {
        let product = await productService.getProduct({_id:req.body.productID,isDelete: false});
        //console.log(req.body.productID);
        if(!product){
            return res.json ({messagw :"product is nort found .."});
        };
        return res.json({product});
    } catch (error) {
        console.log(error);
        return json({ message :" server error"});
    }
};

exports.getallproduct = async(req ,res)=>
{
    try {
        let product = await productService.getallproduct({ isDelete: false});
        if(!product){
            return res.json ({meaasge :"product is not found    "});
        };
        return res.json({product : product});
        
    } catch (error) {
        console.log(error);
        return  json ({message:"server error"})
    }
};


// ... existing code ...

exports.updateProduct = async (req, res) => {
    try {
        let product = await productService.updateProduct(req.body.productID);
        
        if (!product) {
            return res.json({ message: "Product is not found..Please try again" });
        }
        if(req.file)
        {
            req.body.productImage = req.file.path.replace('\\', '/');
        };
        product = await productService.updateProduct(req.body.productID,{...req,body},{new: true})
        return res.json({ product, message: "Product successfully updated." });

    } catch (error) {
        console.log(error);
        return res.json({ message: "Server error from product controller" });
    }
};

exports.deleteproduct = async(req,res)=>
{
    try {
        let product = await productService.deleteProduct(req.body.productID);
        if(!product){
            return res.json({message:"product is not found ..."})
        };
        product = await productService.deleteProduct(req.body.productID , {isdelete: true},{new :true})
        
    } catch (error) {
        console.log(error);
        return res.json ({message:" server error from product controller "})
        
    }
}

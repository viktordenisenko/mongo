const mongoose = require('mongoose');


const list = async (req,res) => {
   const products = await Product.find({}).populate("category").exec();
   res.json({
       success: true,
       products: products
   });

};

const listByCategory = async (req, res) => {
    const products = await Product.find({category: req.params.categoryId}).exec();
     res.json(products);
};

const listCart = async (req,res) => {
    const products = await Product.find({_id: req.body.productIds}, "title price photo").exec();
    return res.json(products);
};



const getOne = async (req,res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.productId)) {
        const product = await Product
            .findById(req.params.productId)
            .populate('category')
            .exec();
        return  res.json(product);
    } else {
        res.json( {
            message: 'product not found'
        });
    }

};

const create = async (req,res) => {
    const pro = new Product ({
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price : req.body.price,
        sale : req.body.sale,
        photo : req.body.photo
    });
    await pro.save();
       return  res.json({ message: "Product Created" });
};
const deleteProduct = async (req, res) => {
    await Product.deleteOne({ _id:req.params.productId}).exec();
       res.json({ message: "product deleted"});

};

const update =  async (req, res) => {

    await  Product.updateOne({ _id: req.params.productId },
        {
            category: req.body.category,
            title: req.body.title,
            miniDescription: req.body.miniDescription,
            description: req.body.description,
            price : req.body.price,
            sale : req.body.sale,
            photo : req.body.photo
        }).exec();

            res.json({ message: "product updated" });

};





module.exports = {
    list,
    getOne,
    create,
    deleteProduct,
    update,
    listByCategory,
    listCart
};

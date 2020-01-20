const list = async (req,res) => {
   const products = await Product.find({}).populate("category").exec();
   return res.json(products);
};

const listCart = async (req,res) => {
    const products = await Product.find({_id: req.body.productIds}, "title price photo").exec();
    return res.json(products);
};



const getOne = async (req,res) => {
   const product = await Product.findOne({_id: req.params.productId}).exec()
       return  res.json(product);
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
       return  res.json({
            message: "Product Created"
        });

};
const deleteProduct = async (req, res) => {

    await Product.deleteOne({ _id:req.params.productId}).exec()
       return  res.json({ message: "product deleted"});

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

            return res.json({message: "product updated"});

};
const listByCategory = async (req, res) => {
   const product = await Product.find({category: req.params.categoryId}).exec()
        return res.json(products);

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

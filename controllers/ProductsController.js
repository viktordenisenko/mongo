const list = (req,res) => {
    Product.find({}, (err, product) => {
        res.json(product);
    });
};



const getOne = (req,res) => {
    const productId = req.params.productId;
    Product.findOne({_id: productId}, (err, product) => {
        res.json(product);
    });
};

const create = (req,res) => {
    const pro = new Product ({
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price : req.body.price,
        sale : req.body.sale,
        photo : req.body.photo
    });
    pro.save().then(() => {
        res.json({
            message: "Product Created"
        });
    });
};
const deleteProduct = (req, res) => {
    const productId = req.params.productId;
    Product.deleteOne({_id: productId}, (err) => {
        res.json({
            message: "product deleted"
        });
    });
};

const update = (req, res) => {
    const productId = req.params.productId;
    Product.updateOne({_id: productId},
        {
            //category: mongoose.Types.ObjectId,
            title: req.body.title,
            miniDescription: req.body.miniDescription,
            description: req.body.description,
            price : req.body.price,
            sale : req.body.sale,
            photo : req.body.photo
        }
        , (err) => {
            res.json({
                message: "product updated"
            });
        });
};
const listByCategory = (req, res) => {
    Product.find({category: req.params.categoryId}, (err, products) => {
        res.json(products);
    });
};




module.exports = {
    list,
    getOne,
    create,
    deleteProduct,
    update,
    listByCategory
};

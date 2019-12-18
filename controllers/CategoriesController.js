const list = (req,res) => {
    Category.find({}, (err, category) => {
        res.json(category);
    });
};

const getOne = (req,res) => {
    const categoryId = req.params.categoryId;
    Category.findOne({_id: categoryId}, (err, category) => {
        res.json(category);
    });
};

const create = (req,res) => {
    const category = new Category ({
        title: req.body.title,

    });
    category.save().then(() => {
        res.json({
            message: "Category Created"
        });
    });
};
const deleteCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    Category.deleteOne({_id: categoryId}, (err) => {
        res.json({
            message: "category deleted"
        });
    });
};

const update = (req, res) => {
    const categoryId = req.params.categoryId;
    Category.updateOne({_id: categoryId},
        {
            title: req.body.title,

        }
        , (err) => {
            res.json({
                message: "Category updated"
            });
        });
};


module.exports = {
    list,
    getOne,
    create,
    deleteCategory,
    update
};

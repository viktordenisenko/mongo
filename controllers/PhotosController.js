const list = (req,res) => {
    Photo.find({}, (err, photos) => {
        res.json(photos);
    });
}

const createPhoto = (req, res) => {
    const ph = new Photo({
        url: req.body.url,
        sort: req.body.sort
    });
    ph.save().then(() => {
        res.json({
            message:"photo created"
        });
    });
}
const deletePhoto = (req, res) => {
    Photo.deleteOne({_id: req.params.photoId}, (err) => {
        res.json({
            message:"photo deleted"
        });
    });
}
const getOne = (req, res) => {
    Photo.findById(req.params.photoId , (err , photos) => {
        res.json(photos);
    })
}

const updatePhoto = (req, res ) => {
    Photo.updateOne({ _id: req.params.photoId } , {
        url:req.body.url,
        sort:req.body.sort
        }, (err) => {
        res.json({
            message: "photo updated"
        });

        });
}


module.exports = {
    list,
    createPhoto,
    deletePhoto,
    getOne,
    updatePhoto,

}
